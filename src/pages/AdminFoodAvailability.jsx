import { Button, TextBox, TitleBox } from "@/Components";
import { OrderDetails, SideBarAdmin } from "@/Components/CombindedAdvanced";
import ItemOrganizer from "@/Components/CombindedAdvanced/ItemOrganizer";
import Head from "next/head";

export default function AdminFoodAvailability(props) {
  // console.log(props.FoodItems.Availability);
  const Available = props.FoodItems.filter((item) => item.Availability == true);
  const UnAvailable = props.FoodItems.filter(
    (item) => item.Availability == false
  );
  const BreakfastData = Available.filter((item) =>
    item.Meal.includes("Breakfast")
  );
  // console.log(BreakfastData);
  const LunchData = Available.filter((item) => item.Meal.includes("Lunch"));
  const DinnerData = Available.filter((item) => item.Meal.includes("Dinner"));
  const BreakfastDataUnavailable = UnAvailable.filter((item) =>
    item.Meal.includes("Breakfast")
  );
  // console.log(BreakfastData);
  const LunchDataUnavailable = UnAvailable.filter((item) =>
    item.Meal.includes("Lunch")
  );
  const DinnerDataUnavailable = UnAvailable.filter((item) =>
    item.Meal.includes("Dinner")
  );
  // console.log(props.FoodItems.length);
  const BreakfastVegCount = BreakfastData.filter((item) =>
    item.Type.includes("Veg")
  );
  const BreakfastChickenCount = BreakfastData.filter((item) =>
    item.Type.includes("Chicken")
  );
  const BreakfastFishCount = BreakfastData.filter((item) =>
    item.Type.includes("Fish")
  );
  const LunchVegCount = LunchData.filter((item) => item.Type.includes("Veg"));
  const LunchChickenCount = LunchData.filter((item) =>
    item.Type.includes("Chicken")
  );
  const LunchFishCount = LunchData.filter((item) => item.Type.includes("Fish"));
  const DinnerVegCount = DinnerData.filter((item) => item.Type.includes("Veg"));
  const DinnerChickenCount = DinnerData.filter((item) =>
    item.Type.includes("Chicken")
  );
  const DinnerFishCount = DinnerData.filter((item) =>
    item.Type.includes("Fish")
  );
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
          Items={BreakfastData}
          AvailableFood={BreakfastDataUnavailable}
        />
        <ItemOrganizer
          Title={"Lunch"}
          Types={LunchCounter}
          Items={LunchData}
          AvailableFood={LunchDataUnavailable}
        />
        <ItemOrganizer
          Title={"Snack & Rest"}
          Types={SnackAndRestCounter}
          Items={DinnerData}
          AvailableFood={DinnerDataUnavailable}
        />
      </div>
    </div>
  );
}
const axios = require("axios");
// const dateObj = new Date();
// const year = dateObj.getFullYear();
// const month = dateObj.getMonth();
// const date = dateObj.getDate();
// const currentDate = new Date(year, month, date);
let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://localhost:3000/api/FoodItem/?Method=Find",
  headers: {},
  data: {},
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
