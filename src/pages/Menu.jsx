import { SideBarMenu } from "@/Components/CombindedAdvanced";
import {
  FoodItem,
  FoodItem2,
  FoodItemCombined,
} from "@/Components/CombinedComponents";
import { useState } from "react";
export default function Menu(props) {
  const FoodItems = [
    { Name: "Name1", Image: 1, Desc: "aaaaaa", Rating: 2 },
    { Name: "Name2", Image: 2, Desc: "aaaaaab", Rating: 5 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  ];
  return (
    <div
      className={
        "bg-Green2 w-full h-full rounded-lg flex flex-1 flex-row gap-15"
      }
    >
      <div className={"w-1/3 h-full"}>
        <SideBarMenu />
      </div>
      <div
        className={
          " grid-cols-5 grid bg-Green3 rounded-lg justify-between w-full h-full auto-cols-auto"
        }
      >
        {FoodItems.map((item, index) => (
          <FoodItemCombined
            Name={item.Name}
            imageNumber={item.Image}
            desc={item.Desc}
            Rating={item.Rating}
          />
        ))}
      </div>
    </div>
  );
}
