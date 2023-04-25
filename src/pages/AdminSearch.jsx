import { Button, TextBox, TitleBox } from "@/Components";
import { OrderDetails, SideBarAdmin } from "@/Components/CombindedAdvanced";
import Head from "next/head";
import { useState } from "react";

export default function AdminSearch(props) {
  const [FoodItems, setFoodItems] = useState();
  const [searchText, setSearchText] = useState("");
  // const selected = FoodItems.filter(
  //   (item) => (item.Meal.UserName = searchText)
  // );
  // setFoodItems(selected);
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
        <TitleBox title={"Food Items"} />
        <div className={"flex flex-auto flex-row gap-10 items-center"}>
          <TextBox
            title="Search"
            placeholder={"🔍"}
            handleChange={(event) => {
              setSearchText(event.target.value);
              if (searchText == "") {
                setFoodItems(props.Orders);
              } else {
                const temp = props.Orders.filter(
                  (item) => (item.Meal.UserName = searchText)
                );
                setFoodItems(temp);
              }
            }}
          />
          <Button text={"Search"} />
        </div>
        <div
          className={
            "bg-Green3 p-15 rounded-lg flex flex-wrap flex-row justify-left gap-30 overflow-y-scroll"
          }
        >
          {FoodItems != undefined &&
            FoodItems.map((item) => (
              <OrderDetails
                key={item._id}
                _id={item._id}
                Name={item.Name}
                Image={item.Image}
                desc={item.Description}
                Rating={item.Rating}
                Status={item.Status}
                Price={item.Price}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
const axios = require("axios");
let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://localhost:3000/api/Orders/?Method=Find",
  headers: {},
  data: {},
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
