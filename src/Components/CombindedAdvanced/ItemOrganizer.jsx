import { useState } from "react";
import {
  Counter,
  FoodItem,
  FoodItem5,
  FoodItemWithClose,
} from "../CombinedComponents";
import TitleBox from "../TitleBox";
import TextBox from "../TextBox";
import Button from "../Button";
import Image from "next/image";
const axios = require("axios");
export default function ItemOrganizer(props) {
  const [items, setItems] = useState(props.Items);
  const [visibility, setVisibility] = useState(false);
  const [showItemList, setShowItemList] = useState(false);
  async function AvailableFunc(item) {
    setItems(props.Items.push({ Name: item.Name, Image: item.Image }));
    setShowItemList(false);
    let data = {
      Selection: "_id",
      value: item._id,
      Fields: { Availability: true },
    };
    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/FoodItem/",
      headers: {},
      data: data,
    };
    try {
      const response = await axios(config);
      const Submit = await response.data;
      console.log(Submit);
    } catch (err) {
      console.error(err.message);
    }
  }

  async function UnAvalilableFunc(item) {
    setItems(props.Items.pop({ Name: item.Name, Image: item.Image }));
    let data = {
      Selection: "_id",
      value: item._id,
      Fields: { Availability: false },
    };
    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/FoodItem/",
      headers: {},
      data: data,
    };
    try {
      const response = await axios(config);
      const Submit = await response.data;
      console.log(Submit);
    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    <div className={"flex flex-auto flex-col gap-15 p-15"}>
      <div
        className={"flex flex-auto flex-row gap-10 items-center"}
        onClick={() => {
          visibility == false
            ? setVisibility(true)
            : visibility == true
            ? setVisibility(false)
            : null;
        }}
      >
        <div>
          <TitleBox title={props.Title} />
        </div>
        {props.Types.map((type, index) => (
          <Counter text={type.Name} amount={type.Count} key={index} />
        ))}
      </div>
      {visibility && (
        <div className="flex flex-row gap-10 flex-wrap">
          {props.Items.map((Item, index) => (
            <FoodItemWithClose
              Name={Item.Name}
              imageNumber={Item.Image}
              RemoveFunc={UnAvalilableFunc(Item)}
            />
          ))}
          <FoodItem5
            onClickFunc={() => {
              setShowItemList(true);
            }}
          />
        </div>
      )}
      {showItemList && (
        <div
          className={
            "fixed inset-x-1/4 w-2/4 h-fit p-30 bg-black flex flex-col gap-15 rounded-lg"
          }
        >
          <div
            className={
              "w-6 h-6 bg-Red absolute top-2 right-2 text-black rounded-full shadow-sm shadow-black flex flex-auto p-2 justify-center hover:shadow-none"
            }
            onClick={() => setShowItemList(false)}
          >
            <Image
              className={"hover:fill-white "}
              src={"/Resources/Vectors/x.png"}
              alt={"x"}
              width={12}
              height={12}
            />
          </div>
          <div className={"flex flex-row gap-10 items-center"}>
            <TextBox
              title="Search"
              placeholder={"🔍"}
              handleChange={(event) => {
                setSearchText(event.target.value);

                if (searchText == "") {
                  setItems(props.Items);
                } else {
                  const temp = props.Items.filter(
                    (item) => item.Name == searchText
                  );
                  console.log(temp);
                  setItems(temp);
                }
              }}
            />
            {/* <Button text={"Search"} /> */}
          </div>
          <div
            className={
              "bg-white p-15 flex flex-wrap flex-row w-full h-fit rounded-lg justify-around gap-10"
            }
          >
            {props.AvailableFood.map((item, index) => (
              <FoodItem
                key={index}
                Name={item.Name}
                imageNumber={item.Image}
                ClickFun={AvailableFunc(item)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
