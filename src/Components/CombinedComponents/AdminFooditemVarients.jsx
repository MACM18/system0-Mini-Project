import { FoodItem, FoodItem4 } from "@/Components/CombinedComponents";
import { useState } from "react";
export default function AdminFooditemVarients({ Name, Image, desc }) {
  const List = [1, 2, 3];
  const [varient, setVarient] = useState(0);
  return (
    <div className="w-fit h-fit">
      {varient == 0 && (
        <FoodItem
          Name={Name}
          imageNumber={Image}
          ClickFun={() => {
            setVarient(1);
          }}
        />
      )}
      {varient == 1 && (
        <div className={"absolute inset-y-4 inset-x-1/4 w-2/4 "}>
          <FoodItem4
            Name={Name}
            imageNumber={Image}
            description={desc}
            List={List}
            CancelFunc={() => setVarient(0)}
          />
        </div>
      )}
    </div>
  );
}
