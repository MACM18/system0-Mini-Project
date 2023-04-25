import { TitleBox, Button } from "@/Components";
import { OrderSummary, SideBarAdmin } from "@/Components/CombindedAdvanced";
import { Counter, DropDown, FoodItem } from "@/Components/CombinedComponents";
import Head from "next/head";

export default function AdminDashboard(props) {
  const selected = props.Orders.filter((item) => item.status != "Complete");
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
        <OrderSummary />
        <TitleBox title={"Orders"} />
        <div className="w-full h-auto">
          <table className="w-full">
            <tr>
              <th>Name</th>
              <th>Food</th>
              <th>Price</th>
              <th>Complete</th>
              <th>Cancel</th>
            </tr>
            {selected.map((items) => (
              <tr>
                <td>items.UserName</td>
                <td>items.Items</td>
                <td>items.Price</td>
                <td>
                  <Button text={Complete} />
                </td>
                <td>
                  <Button text={Cancel} />
                </td>
              </tr>
            ))}
            ;
          </table>
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
    const Orders = await response.data;
    return { props: { Orders } };
  } catch (err) {
    console.error(err.message);
    return { props: { Orders: [] } };
  }
};
