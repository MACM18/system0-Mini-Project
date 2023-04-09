import { TitleBox } from "@/Components";
import { OrderSummary, SideBarAdmin } from "@/Components/CombindedAdvanced";
import { Counter, DropDown, FoodItem } from "@/Components/CombinedComponents";
import Head from "next/head";

export default function AdminDashboard(props) {
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
        <TitleBox title={"Dashboard"} />
        <TitleBox title={"Order Summary"} />
        <div className={"flex flex-row justify-between"}>
          <div>
            <DropDown
              List={[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "June",
                "July",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ]}
              Title={"Month"}
            />
          </div>
          <div>
            <DropDown
              List={[2023, 2024, 2025, 2026, 2027, 2028]}
              Title={"Year"}
            />
          </div>
        </div>
        <OrderSummary />
        <TitleBox title={"Top Food"} />
        <div className={"flex flex-row gap-10 overflow-auto"}>
          {props.BestFood != undefined &&
            props.BestFood.map((item, index) => (
              <FoodItem key={index} Name={item.Name} imageNumber={item.Image} />
            ))}
        </div>
        <TitleBox title={"Worst"} />
        <div className={"flex flex-row gap-10 overflow-auto"}>
          {props.WorstFood != undefined &&
            props.WorstFood.map((item, index) => (
              <FoodItem key={index} Name={item.Name} imageNumber={item.Image} />
            ))}
        </div>
      </div>
    </div>
  );
}
