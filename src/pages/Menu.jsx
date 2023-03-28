import { SideBarMenu } from "@/Components/CombindedAdvanced";
import { FoodItem, FoodItem2 } from "@/Components/CombinedComponents";
import { useState } from "react";
export default function Menu(props) {
  const [FoodItemVisibility, setFoodItemVisibility] = useState(true);
  const [FoodItem2Visibility, setFoodItem2Visibility] = useState(false);
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
          "grid-flow-dense grid-cols-5 grid bg-Green3 rounded-lg w-full h-full"
        }
      >
        {props.FoodItems.map((Name, Image, Desc, Rating, index) => (
          <>
            <FoodItem key={index} Name={Name} imageNumber={Image} />
            <FoodItem2
              key={index}
              Name={Name}
              imageNumber={Image}
              description={Desc}
              rating={Rating}
            />
          </>
        ))}
      </div>
    </div>
  );
}
