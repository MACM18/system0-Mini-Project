import { TitleBox } from "@/Components";
import { SideBarAdmin } from "@/Components/CombindedAdvanced";
import { Counter } from "@/Components/CombinedComponents";
import Head from "next/head";
import { useState } from "react";

export default function AdminPayments(props) {
  const CompletedOrders = props.Orders.filter(
    (item) => item.Status === "Complete"
  );
  let CompletedPrice = 0;
  CompletedOrders.forEach((element) => {
    CompletedPrice += element.Price;
  });
  const RemainingOrders = props.Orders.filter(
    (item) => item.Status === "Pending"
  );
  let RemainingPrice = 0;
  RemainingOrders.forEach((element) => {
    RemainingPrice += element.Price;
  });
  const Breakfast = CompletedOrders.filter((item) => item.Meal == "Breakfast");
  const Lunch = CompletedOrders.filter((item) => item.Meal == "Lunch");
  const Dinner = CompletedOrders.filter((item) => item.Meal == "Dinner");
  let BreakfastPrice = 0;

  Breakfast.forEach((element) => {
    BreakfastPrice += element.Price;
  });
  let LunchPrice = 0;
  Lunch.forEach((element) => {
    LunchPrice += element.Price;
  });
  let DinnerPrice = 0;
  Dinner.forEach((element) => {
    DinnerPrice += element.Price;
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
          <Counter text={"CompletedOrders"} amount={CompletedOrders.length} />
          <Counter text={"Income"} amount={CompletedPrice} />
        </div>
        <div className={"flex p-15 flex-row justify-between"}>
          <Counter text={"RemainingOrders"} amount={RemainingOrders.length} />
          <Counter text={"ExpectedIncome"} amount={RemainingPrice} />
        </div>
        <TitleBox title={"Breakfast"} />
        <div className={"flex p-15 flex-row justify-between"}>
          <Counter text={"Orders"} amount={Breakfast.length} />
          <Counter text={"Income"} amount={BreakfastPrice} />
        </div>
        <TitleBox title={"Lunch"} />
        <div className={"flex p-15 flex-row justify-between"}>
          <Counter text={"Orders"} amount={Lunch.length} />
          <Counter text={"Income"} amount={LunchPrice} />
        </div>
        <TitleBox title={"Dinner"} />
        <div className={"flex p-15 flex-row justify-between"}>
          <Counter text={"Orders"} amount={Dinner.length} />
          <Counter text={"Income"} amount={DinnerPrice} />
        </div>
      </div>
    </div>
  );
}
const axios = require("axios");
const moment = require("moment");
const now = moment();
const currentDate = now.format("YYYY-MM-DD");
const currentTime = now;
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
    const Orders = await response.data;
    return { props: { Orders } };
  } catch (err) {
    console.error(err.message);
    return { props: { Orders: [] } };
  }
};
