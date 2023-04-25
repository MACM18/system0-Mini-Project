import { Button, TextBox, TitleBox } from "@/Components";
import { OrderDetails, SideBarAdmin } from "@/Components/CombindedAdvanced";
import ItemOrganizer from "@/Components/CombindedAdvanced/ItemOrganizer";
import { Counter, ItemCounter } from "@/Components/CombinedComponents";
import Head from "next/head";

export default function AdminCurrentOrders(props) {
  // console.log(props.FoodItems);
  const BreakfastData = props.FoodItems.filter((item) =>
    item.Meal.includes("Breakfast")
  );
  const LunchData = props.FoodItems.filter((item) =>
    item.Meal.includes("Lunch")
  );
  const DinnerData = props.FoodItems.filter((item) =>
    item.Meal.includes("Dinner")
  );
  const CompleteData = props.FoodItems.filter(
    (item) => item.Status === "Complete"
  );
  const RemainingData = props.FoodItems.filter(
    (item) => item.Status === "In Progress"
  );
  const CompleteDataCount = CompleteData.length;
  const RemainingDataCount = RemainingData.length;
  const TotalCount = props.FoodItems.length;
  // console.log(props.FoodItems.length);
  const BreakfastVegCount = BreakfastData.filter((item) => item.Type == "Veg");
  const BreakfastChickenCount = BreakfastData.filter(
    (item) => item.Type == "Chicken"
  );
  const BreakfastFishCount = BreakfastData.filter(
    (item) => item.Type == "Fish"
  );
  const LunchVegCount = LunchData.filter((item) => item.Type == "Veg");
  const LunchChickenCount = LunchData.filter((item) => item.Type == "Chicken");
  const LunchFishCount = LunchData.filter((item) => item.Type == "Fish");
  const DinnerVegCount = DinnerData.filter((item) => item.Type == "Veg");
  const DinnerChickenCount = DinnerData.filter(
    (item) => item.Type == "Chicken"
  );
  const DinnerFishCount = DinnerData.filter((item) => item.Type == "Fish");
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
  const BreakfastCounter = [
    { Name: "Veg", Count: BreakfastVegCount.length },
    { Name: "Fish", Count: BreakfastFishCount.length },
    { Name: "Chicken", Count: BreakfastChickenCount.length },
  ];
  const LunchCounter = [
    { Name: "Veg", Count: LunchVegCount.length },
    { Name: "Fish", Count: LunchFishCount.length },
    { Name: "Chicken", Count: LunchChickenCount.length },
  ];
  const SnackAndRestCounter = [
    { Name: "Veg", Count: DinnerVegCount.length },
    { Name: "Fish", Count: DinnerFishCount.length },
    { Name: "Chicken", Count: DinnerChickenCount.length },
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
        <TitleBox title={"Current Orders"} />
        <div className={"flex p-15 flex-row justify-between"}>
          <Counter text={"Total"} amount={TotalCount} />
          <Counter text={"Remaining"} amount={RemainingDataCount} />
          <Counter text={"Completed"} amount={CompleteDataCount} />
        </div>
        <TitleBox title={"Breakfast"} />
        <div className={"flex p-10 flex-row justify-between overflow-x-auto"}>
          {BreakfastCounter != undefined &&
            BreakfastCounter.map((item, index) => (
              <Counter key={index} text={item.Name} amount={item.Count} />
            ))}
        </div>
        <TitleBox title={"Current Orders"} />
        <div className={"flex p-10 flex-row justify-between overflow-x-auto"}>
          {LunchCounter != undefined &&
            LunchCounter.map((item, index) => (
              <Counter key={index} text={item.Name} amount={item.Count} />
            ))}
        </div>
        <TitleBox title={"Current Orders"} />
        <div className={"flex p-10 flex-row justify-between overflow-x-auto"}>
          {SnackAndRestCounter != undefined &&
            SnackAndRestCounter.map((item, index) => (
              <Counter key={index} text={item.Name} amount={item.Count} />
            ))}
        </div>
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
    return { props: { FoodItems } };
  } catch (err) {
    console.error(err.message);
    return { props: { FoodItems: [] } };
  }
};
