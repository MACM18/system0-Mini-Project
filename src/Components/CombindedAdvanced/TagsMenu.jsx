import { useState } from "react";
import TitleBox from "../TitleBox";
import TextBox from "../TextBox";
import Button from "../Button";
import Image from "next/image";

export default function TagsMenu(props) {
  const [visibility, setVisibility] = useState(false);
  const [showItemList, setShowItemList] = useState(false);
  return (
    <div className={"flex flex-auto flex-col gap-15 p-15"}>
      <div
        className={"flex flex-auto flex-row gap-10 items-center"}
        onClick={() => {
          setVisibility(!visibility);
        }}
      >
        {props.Tags.map((tag, index) => (
          <div key={index}>
            <div>tag</div>
            <div></div>
          </div>
        ))}
      </div>
      {visibility && (
        <div className="flex flex-row gap-10 flex-wrap">
          {props.Items.map((Item, index) => (
            <div key={index}>Item</div>
          ))}
          <div
            onClick={() => {
              setShowItemList(true);
            }}
          >
            {" "}
            x{" "}
          </div>
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
            <TextBox title="Search" placeholder={"🔍"} />
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
                ClickFun={() => {
                  props.Items.push({ Name: item.Name, Image: item.Image });
                  setShowItemList(false);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
