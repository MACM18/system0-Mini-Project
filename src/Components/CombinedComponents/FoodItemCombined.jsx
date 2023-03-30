import { FoodItem, FoodItem2 } from "@/Components/CombinedComponents";
import { useState } from "react";

export default function FoodItemCombined({ Name, Image, desc, Rating }) {
  const [varient, setVarient] = useState(0);
  return (
    <div className="w-full h-fit">
      {varient == 0 && (
        <FoodItem
          Name={Name}
          imageNumber={Image}
          MouseOver={() => {
            setVarient(1);
          }}
        />
      )}
      {varient == 1 && (
        <FoodItem2
          Name={Name}
          imageNumber={Image}
          description={desc}
          rating={Rating}
          MouseLeave={() => setVarient(0)}
        />
      )}
    </div>
  );
}
