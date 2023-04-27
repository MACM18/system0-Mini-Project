import { TitleBox, Button } from "@/Components";
import { OrderSummary, SideBarAdmin } from "@/Components/CombindedAdvanced";
import { Counter, DropDown, FoodItem } from "@/Components/CombinedComponents";
import Head from "next/head";

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
        <div className="w-full h-auto">
          <div className="w-full">
            <div>
              <div>Name</div>
              <div>Food</div>
              <div>Price</div>
              <div>Complete</div>
              <div>Cancel</div>
            </div>
            {selected.map((items) => (
              <div>
                <div>{items.UserName}</div>
                <div>
                  {items.Items.map((values) => (
                    <>
                      <div>{values.Name}</div>
                      <div>{values.Type}</div>
                      <div>{values.Amount}</div>
                      <div>{values.Price}</div>
                    </>
                  ))}
                </div>
                <div>{items.Price}</div>
                <div>
                  <Button text={"Complete"} />
                </div>
                <div>
                  <Button text={"Cancel"} />
                </div>
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
