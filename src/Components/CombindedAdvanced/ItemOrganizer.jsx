import { useState } from "react";
import { Counter, FoodItemWithClose } from "../CombinedComponents";
import TitleBox from "../TitleBox";

export default function ItemOrganizer(props) {
    const [visibility,setVisibility]=useState(false);
  return (
    <div className={"flex flex-auto flex-col gap-15 p-15"}>
      <div className={"flex flex-auto flex-row gap-10 items-center"} onClick={()=>{visibility==false?setVisibility(true):visibility==true?setVisibility(false):null}}>
        <div>
        <TitleBox title={props.Title} />
        </div>
        {props.Types.map((type, index) => (
          <Counter text={type.Name} amount={type.Count} key={index} />
        ))}
      </div>
      {visibility&&<div className="flex flex-auto flex-row gap-10">
        {props.Items.map((Item, index) => (
          <FoodItemWithClose Name={Item.Name} imageNumber={Item.Image} />
        ))}
      </div>}
    </div>
  );
}
