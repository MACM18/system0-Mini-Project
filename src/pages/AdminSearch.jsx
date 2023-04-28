import { Button, TextBox, TitleBox } from "@/Components";
import { OrderDetails, SideBarAdmin } from "@/Components/CombindedAdvanced";
import Head from "next/head";
import { useState } from "react";
const moment = require("moment");
export default function AdminSearch(props) {
  const [orders, setOrders] = useState(props.Orders);
  const [searchText, setSearchText] = useState("");

  // const now = moment();
  // const currentDate = now.format("YYYY-MM-DD");
  // // const currentTime = now;
  // const selected = props.Orders.filter((item) => item.Date == currentDate);
  // setOrders(selected);
  // const FoodItems = [
  //   { Name: "Name1", Image: 1, Desc: "aaaaaa", Rating: 2 },
  //   { Name: "Name2", Image: 2, Desc: "aaaaaab", Rating: 5 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  // ];
  return (
    <div className={" h-screen bg-Green2 flex flex-auto flex-row gap-15"}>
      <Head>
        <title>Search</title>
      </Head>
      <div className={"w-fit h-full"}>
        <SideBarAdmin />
      </div>
      <div
        className={
          "bg-white rounded-lg w-full p-10 flex flex-auto flex-col gap-10"
        }
      >
        <TitleBox title={"Food Items"} />
        <div
          className={"flex flex-auto flex-row gap-10 items-start justify-start"}
        >
          <TextBox
            title="Search"
            placeholder={"🔍"}
            handleChange={(event) => {
              setSearchText(event.target.value);

              if (searchText == "") {
                setOrders(props.Orders);
              } else {
                const temp = props.Orders.filter(
                  (item) => item.UserName == searchText
                );
                console.log(temp);
                setOrders(temp);
              }
            }}
          />
          {/* <Button text={"Search"} /> */}
        </div>
        <div
          className={
            "bg-Green3 p-4 rounded-lg flex flex-wrap flex-row justify-left gap-10 overflow-y-scroll"
          }
        >
          {orders != undefined &&
            orders.map((item) => (
              <OrderDetails
                key={item._id}
                _id={item._id}
                UserName={item.UserName}
                Status={item.Status}
                Price={item.Price}
                Meal={item.Meal}
                Items={item.Items}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
const axios = require("axios");
let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://localhost:3000/api/Orders/?Method=Find",
  headers: {},
  data: {},
};
export const getStaticProps = async () => {
  try {
    const response = await axios(config);
    const Orders = await response.data;
    return { props: { Orders } };
  } catch (err) {
    console.error(err.message);
    return { props: { Orders: [] } };
  }
};
