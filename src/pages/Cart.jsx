import { Button, Label, TitleBox } from "@/Components";
import { SideBarUser } from "@/Components/CombindedAdvanced";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const moment = require("moment");
export default function Cart(props) {
  const [stored, setStored] = useState();
  const [storedName, setStoredName] = useState("blue");
  useEffect(
    () =>
      setStored(
        typeof window !== "undefined" && localStorage.getItem("CartID")
      ),
    []
  );
  useEffect(
    () =>
      setStoredName(
        typeof window !== "undefined" && localStorage.getItem("CurrentUser")
      ),
    []
  );
  const filterd = props.Carts.filter((item) => item._id == stored);
  // console.log(filterd[0].Items);
  const router = useRouter();
  const now = moment();
  const currentDate = now.format("YYYY-MM-DD");
  const currentTime = now;
  useEffect(() => {
    if (localStorage.getItem("Status") != "OK") {
      router.push("./LogIn");
    }
  }, []);
  async function submitOrder() {
    const array = props.Carts.filter((item) => item._id == stored);
    let total = 0;
    array[0].Items.forEach((element) => {
      total += element.Price;
      console.log(total);
    });
    let cartData = {
      Selection: "_id",
      value: stored,
      Fields: { Price: total },
    };

    let data = {
      UserName: storedName,
      Time: currentTime,
      Date: currentDate,
      Price: total,
      Status: "Pending",
      Items: array[0].Items,
      Meal: array[0].Meal,
    };
    let configCart = {
      method: "put",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/Cart",
      headers: {},
      data: cartData,
    };
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/Orders/?Method=Insert",
      headers: {},
      data: data,
    };
    try {
      const responseCart = await axios(configCart);
      const response = await axios(config);
      console.log(await responseCart.data);
      console.log(await response.data);
      router.push("./Menu");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      className={
        "bg-Green2 w-screen h-screen rounded-lg flex flex-1 flex-row p-2 gap-15"
      }
    >
      <div className={"max-w-2/5 h-full"}>
        <SideBarUser />
      </div>
      <div className="bg-white w-full h-full rounded-lg p-15 flex flex-1 flex-col gap-15">
        <TitleBox title={"Cart"} />
        <Label text={stored} />
        <div className={"w-full h-full overflow-y-scroll"}>
          {filterd != undefined &&
            filterd.map((order) => (
              <div
                key={order._id}
                className={"w-full h-fit py-10 bg-white rounded-lg"}
              >
                <div className="w-full flex flex-1 flex-row justify-around">
                  <Label text={order.UserName} width={"fit"} />
                  <Label text={order.Status} width={"fit"} />
                </div>
                <div className="w-full flex flex-col gap-4 my-4">
                  {order.Items.map((item) => (
                    <div className="w-full grid grid-cols-3 justify-items-center gap-4">
                      <div className="px-6 p-1 bg-slate-200 rounded-md w-fit">
                        {item.Name}
                      </div>
                      <div className="px-6 p-1 bg-slate-200 rounded-md w-fit text-center">
                        {item.Amount}
                      </div>
                      <div className="px-6 p-1 bg-slate-200 rounded-md w-fit text-right">
                        {item.Price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          {/* <div>{filterd != undefined && <Label text={filterd.Total} />}</div> */}
          <div className="w-full flex flex-1 flex-row justify-around m-4">
            <Button text={"Submit"} onClickFun={submitOrder} />
            <Button
              text={"New Cart"}
              onClickFun={() => localStorage.removeItem("CartID")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
const axios = require("axios");
// let data = {
//   _id: localStorage.getItem("CartID"),
// };
let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://localhost:3000/api/Cart/?Method=Find",
  headers: {},
  data: {},
};
export const getStaticProps = async () => {
  try {
    const response = await axios(config);
    const Carts = await response.data;
    return { props: { Carts } };
  } catch (err) {
    console.error(err.message);
    return { props: { Carts: [] } };
  }
};
