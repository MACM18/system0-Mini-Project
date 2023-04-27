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
      Items: filterd.Items,
      Meal: filterd.Meal,
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
        "bg-Green2 w-full h-screen rounded-lg flex flex-1 flex-row gap-15"
      }
    >
      <div className={"w-fit h-full"}>
        <SideBarUser />
      </div>
      <div className="bg-white w-full h-full rounded-lg p-15 flex flex-1 flex-col gap-15">
        <TitleBox title={"Cart"} />
        <Label text={stored} />
        <div className={"w-full h-full"}>
          {filterd != undefined &&
            filterd.map((order) => (
              <div
                key={order._id}
                className={"w-full h-fit p-10 bg-white rounded-lg"}
              >
                <div>
                  <Label text={order.UserName} width={"fit"} />
                  <Label text={order.Status} width={"fit"} />
                </div>
                <div>
                  {order.Items.map((item) => (
                    <>
                      <div>{item.Name}</div>
                      <div>{item.Amount}</div>
                      <div>{item.Price}</div>
                    </>
                  ))}
                </div>
              </div>
            ))}
          <div>{filterd != undefined && <Label text={filterd.Total} />}</div>
          <div>
            <Button text={"Cancel"} />
            <Button text={"Submit"} onClickFun={submitOrder} />
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
