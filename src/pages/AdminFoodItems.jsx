import { Button, TextBox, TitleBox } from "@/Components";
import { SideBarAdmin } from "@/Components/CombindedAdvanced";
import AdminFooditemVarients from "@/Components/CombinedComponents/AdminFooditemVarients";
import Head from "next/head";
import { useState } from "react";

export default function AdminFoodItems(props) {
  const [foodItems, setFoodItems] = useState(props.FoodItems);
  const [searchText, setSearchText] = useState("");
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
  return (
    <div className={" h-screen bg-Green2 flex flex-auto flex-row gap-15"}>
      <Head>
        <title>Food Itmes</title>
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
        <div className={"flex flex-auto flex-row gap-10 items-start"}>
          <TextBox
            title="Search"
            placeholder={"🔍"}
            handleChange={(event) => {
              setSearchText(event.target.value);

              if (searchText == "") {
                setFoodItems(props.FoodItems);
              } else {
                const temp = props.FoodItems.filter(
                  (item) => item.Name == searchText
                );
                // console.log(temp);
                setFoodItems(temp);
              }
            }}
          />
          {/* <Button text={"Search"} /> */}
        </div>
        <div
          className={
            "bg-Green3 p-15 rounded-lg flex flex-wrap flex-row justify-left gap-30"
          }
        >
          {foodItems != undefined &&
            foodItems.map((item) => (
              <AdminFooditemVarients
                key={item._id}
                Name={item.Name}
                Image={item.Image}
                desc={item.Description}
                Rating={item.Rating}
                Tags={item.Tags}
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
