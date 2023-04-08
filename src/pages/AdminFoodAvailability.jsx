import { Button, TextBox, TitleBox } from "@/Components";
import { OrderDetails, SideBarAdmin } from "@/Components/CombindedAdvanced";
import ItemOrganizer from "@/Components/CombindedAdvanced/ItemOrganizer";
import Head from "next/head";

export default function AdminFoodAvailability(props) {
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
        <TitleBox title={"Food Availability"} />
        <ItemOrganizer
          Title={"Breakfast"}
          Types={BreakfastCounter}
          Items={FoodItems}
          AvailableFood={FoodItems}
        />
        <ItemOrganizer Title={"Lunch"} Types={LunchCounter} Items={FoodItems} />
        <ItemOrganizer
          Title={"Snack & Rest"}
          Types={SnackAndRestCounter}
          Items={FoodItems}
        />
      </div>
    </div>
  );
}
