import { Button, TextBox, TitleBox } from "@/Components";
import { OrderDetails, SideBarAdmin } from "@/Components/CombindedAdvanced";
import ItemOrganizer from "@/Components/CombindedAdvanced/ItemOrganizer";
import { Counter, ItemCounter } from "@/Components/CombinedComponents";
import Head from "next/head";

export default function AdminCurrentOrders(props) {
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
          <Counter text={"Total"} amount={props.Total} />
          <Counter text={"Remaining"} amount={props.Remaining} />
          <Counter text={"Completed"} amount={props.Completed} />
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
