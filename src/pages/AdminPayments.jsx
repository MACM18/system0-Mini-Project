import { TitleBox } from "@/Components";
import { SideBarAdmin } from "@/Components/CombindedAdvanced";
import { Counter } from "@/Components/CombinedComponents";
import Head from "next/head";

export default function AdminPayments(props) {
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
        <TitleBox title={"Current Orders"} />
        <div className={"flex p-15 flex-row justify-between"}>
          <Counter text={"Confirmed Orders"} amount={props.Confirmed} />
          <Counter text={"Expected Income"} amount={props.Income} />
        </div>
        <TitleBox title={"Breakfast"} />
        <div className={"flex p-15 flex-row justify-between"}>
          <Counter text={"Orders"} amount={props.BreakfastOrders} />
          <Counter text={"Income"} amount={props.BreakfastIncome} />
        </div>
        <TitleBox title={"Current Orders"} />
        <div className={"flex p-15 flex-row justify-between"}>
          <Counter text={"Orders"} amount={props.LunchOrders} />
          <Counter text={"Income"} amount={props.LunchIncome} />
        </div>
        <TitleBox title={"Current Orders"} />
        <div className={"flex p-15 flex-row justify-between"}>
          <Counter text={"Orders"} amount={props.SnackOrders} />
          <Counter text={"Income"} amount={props.SnackIncome} />
        </div>
      </div>
    </div>
  );
}
