import { TitleBox, Button, Label } from "@/Components";
import { OrderSummary, SideBarAdmin } from "@/Components/CombindedAdvanced";
import { Counter, DropDown, FoodItem } from "@/Components/CombinedComponents";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function AdminDashboard(props) {
  const selected = props.Orders.filter((item) => item.Status != "Complete");
  const canceled = props.Orders.filter((item) => item.Status == "Canceled");
  const complete = props.Orders.filter((item) => item.Status == "Complete");
  const abandoned = props.Orders.filter((item) => item.Status == "Abandoned");
  const TotalCount = props.Orders.length;
  const RemainingCount = selected.length;
  const CanceledCount = canceled.length;
  const CompeteCount = complete.length;
  const AbandonedCount = abandoned.length;
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("Status") != "Admin") {
      console.log("true");
      router.push("./LogIn");
    } else {
      console.log("true");
    }
  }, []);
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
          "bg-white rounded-lg w-full p-10 flex flex-auto flex-col justify-start gap-2"
        }
      >
        <TitleBox title={"Dashboard"} />
        {/* <TitleBox title={"Order Summary"} /> */}
        {/* <div className={"flex flex-row justify-between"}>
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
        </div>*/}
        <OrderSummary
          Total={TotalCount}
          Remaining={RemainingCount}
          Canceled={CanceledCount}
          Complete={CompeteCount}
          Abandoned={AbandonedCount}
        />
        <TitleBox title={"Orders"} />
        <div className="w-full h-auto overflow-y-scroll">
          <div className="w-full">
            {/* <div className="w-full h-fit flex flex-1 flex-row justify-around gap-4 p-2">
              {/* <TitleBox title={"Name"} />
              <TitleBox title={"Food"} />
              <TitleBox title={"Price"} /> */}
            {/* <TitleBox title={"Complete"} />
              <TitleBox title={"Cancel"} /> */}
            {/* Name
              <div>Food</div>
              <div>Price</div>
              <div>Complete</div>
              <div>Cancel</div>
            </div> */}
            {selected.map((items) => (
              <div className="w-full flex flex-col gap-2 p-2">
                <Label text={items.UserName} />
                <div className="w-full flex flex-col justify-around gap-3">
                  {items.Items.map((values) => (
                    <div className="grid grid-cols-3 justify-items-center gap-2">
                      <div className="p-1 bg-Green2 px-6 rounded-lg">
                        {values.Name}
                      </div>
                      {/* <div className="p-1 bg-Green2 rounded-lg">
                        {values.Type}
                      </div> */}
                      <div className="p-1 bg-Green2 px-6 rounded-lg">
                        {values.Amount}
                      </div>
                      <div className="p-1 bg-Green2 px-6 rounded-lg">
                        {values.Price}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="self-end">
                  <Label text={items.Price} width="fit" />
                </div>
                {/* <div>
                  <Button text={"Complete"} />
                </div>
                <div>
                  <Button text={"Cancel"} />
                </div> */}
              </div>
            ))}
          </div>
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
