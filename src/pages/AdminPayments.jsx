import { TitleBox } from "@/Components";
import { SideBarAdmin } from "@/Components/CombindedAdvanced";
import { Counter } from "@/Components/CombinedComponents";
import Head from "next/head";
import { useState } from "react";

export default function AdminPayments(props) {
  const [total, setTotal] = useState(0);
  const CompletedOrders = props.Orders.filter(
    (item) => item.Status == "Complete"
  );
  CompletedOrders.forEach((element) => {
    setTotal(total + element.Price);
  });
  const FoodItems = [
    { Name: "Name1", Image: 1, Desc: "aaaaaa", Rating: 2 },
    { Name: "Name2", Image: 2, Desc: "aaaaaab", Rating: 5 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  ];
  const BreakfastCounter = [
    { Name: "Main", Count: 20 },
    { Name: "Curry", Count: 5 },
    { Name: "Drinks", Count: 4 },
    { Name: "Snacks", Count: 8 },
  ];
  const LunchCounter = [
    { Name: "Main", Count: 20 },
    { Name: "Curry", Count: 5 },
    { Name: "Drinks", Count: 4 },
    { Name: "Snacks", Count: 8 },
  ];
  const SnackAndRestCounter = [
    { Name: "Main", Count: 20 },
    { Name: "Curry", Count: 5 },
    { Name: "Drinks", Count: 4 },
    { Name: "Snacks", Count: 8 },
  ];
  return (
    <div className={" h-screen bg-Green2 flex flex-auto flex-row gap-15"}>
      <Head>
        <title>Current Orders</title>
      </Head>
      <div className={"w-fit h-full"}>
        <SideBarAdmin />
      </div>
      <div
        className={
          "bg-white rounded-lg w-full p-10 flex flex-auto flex-col justify-between"
        }
      >
        <TitleBox title={"CurrentOrders"} />
        <div className={"flex p-15 flex-row justify-between"}>
          <Counter text={"ConfirmedOrders"} amount={CompletedOrders.length} />
          <Counter text={"ExpectedIncome"} amount={total} />
        </div>
        {/* <TitleBox title={"Breakfast"} />
        <div className={"flex p-15 flex-row justify-between"}>
          <Counter text={"Orders"} amount={props.BreakfastOrders} />
          <Counter text={"Income"} amount={props.BreakfastIncome} />
        </div>
        <TitleBox title={"Lunch"} />
        <div className={"flex p-15 flex-row justify-between"}>
          <Counter text={"Orders"} amount={props.LunchOrders} />
          <Counter text={"Income"} amount={props.LunchIncome} />
        </div>
        <TitleBox title={"Dinner"} />
        <div className={"flex p-15 flex-row justify-between"}>
          <Counter text={"Orders"} amount={props.SnackOrders} />
          <Counter text={"Income"} amount={props.SnackIncome} />
        </div> */}
      </div>
    </div>
  );
}
const axios = require("axios");
const dateObj = new Date();
const year = dateObj.getFullYear();
const month = dateObj.getMonth();
const date = dateObj.getDate();
const currentDate = new Date(year, month, date);
let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://localhost:3000/api/Orders/?Method=Find",
  headers: {},
  data: { Date: currentDate },
};
export const getStaticProps = async () => {
  try {
    const response = await axios(config);
    const FoodItems = await response.data;
    return { props: { Orders } };
  } catch (err) {
    console.error(err.message);
    return { props: { Orders: [] } };
  }
};
