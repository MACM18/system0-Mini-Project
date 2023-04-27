import { FoodItem, FoodItem4 } from "@/Components/CombinedComponents";
import { useState } from "react";
export default function AdminFooditemVarients(props) {
  const List = [1, 2, 3];
  const [varient, setVarient] = useState(0);
  return (
    <div className="w-fit h-fit">
      {varient == 0 && (
        <FoodItem
          Name={props.Name}
          imageNumber={props.Image}
          ClickFun={() => {
            setVarient(1);
          }}
        />
      )}
      {varient == 1 && (
        <div className={"absolute inset-y-4 inset-x-1/4 w-2/4 "}>
          <FoodItem4
            Name={props.Name}
            imageNumber={props.Image}
            description={props.desc}
            price={props.Price}
            Meal={props.Meal}
            Type={props.Type}
            ID={props._id}
            List={List}
            CancelFunc={() => setVarient(0)}
          />
        </div>
      )}
    </div>
  );
}
