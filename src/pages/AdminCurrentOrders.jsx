import { Button, TextBox, TitleBox } from "@/Components";
import { OrderDetails, SideBarAdmin } from "@/Components/CombindedAdvanced";
import ItemOrganizer from "@/Components/CombindedAdvanced/ItemOrganizer";
import { Counter, ItemCounter } from "@/Components/CombinedComponents";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function AdminCurrentOrders(props) {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("Status") != "Admin") {
      console.log("true");
      router.push("./LogIn");
    } else {
      console.log("true");
    }
  }, []);

  // console.log(props.FoodItems);

  const CompleteData = props.Orders.filter(
    (item) => item.Status === "Complete"
  );
  const RemainingData = props.Orders.filter(
    (item) => item.Status === "Pending"
  );
  const BreakfastData = RemainingData.filter(
    (item) => item.Meal == "Breakfast"
  );
  const LunchData = RemainingData.filter((item) => item.Meal == "Lunch");
  const DinnerData = RemainingData.filter((item) => item.Meal == "Dinner");
  const CompleteDataCount = CompleteData.length;
  const RemainingDataCount = RemainingData.length;
  const TotalCount = props.Orders.length;
  // console.log(props.FoodItems.length);
  const BreakfastCount = BreakfastData.length;
  const LunchCount = LunchData.length;
  const DinnerCount = DinnerData.length;
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
  // const BreakfastCounter = [
  //   { Name: "Veg", Count: BreakfastVegCount.length },
  //   { Name: "Fish", Count: BreakfastFishCount.length },
  //   { Name: "Chicken", Count: BreakfastChickenCount.length },
  // ];
  // const LunchCounter = [
  //   { Name: "Veg", Count: LunchVegCount.length },
  //   { Name: "Fish", Count: LunchFishCount.length },
  //   { Name: "Chicken", Count: LunchChickenCount.length },
  // ];
  // const SnackAndRestCounter = [
  //   { Name: "Veg", Count: DinnerVegCount.length },
  //   { Name: "Fish", Count: DinnerFishCount.length },
  //   { Name: "Chicken", Count: DinnerChickenCount.length },
  // ];
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
        <TitleBox title={"Current Orders"} />
        <div className={"flex p-15 flex-row justify-between"}>
          <Counter text={"Total"} amount={TotalCount} />
          <Counter text={"Remaining"} amount={RemainingDataCount} />
          <Counter text={"Completed"} amount={CompleteDataCount} />
        </div>
        <div className={"flex p-10 flex-row justify-between overflow-x-auto"}>
          <Counter text={"Breakfast"} amount={BreakfastCount} />
        </div>

        <div className={"flex p-10 flex-row justify-between overflow-x-auto"}>
          <Counter text={"Lunch"} amount={LunchCount} />
        </div>

        <div className={"flex p-10 flex-row justify-between overflow-x-auto"}>
          <Counter text={"Dinner"} amount={DinnerCount} />
        </div>
      </div>
    </div>
  );
}
const axios = require("axios");
const moment = require("moment");
const now = moment();

const currentDate = now.format("YYYY-MM-DD");
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
