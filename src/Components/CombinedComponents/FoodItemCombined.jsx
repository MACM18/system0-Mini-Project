import { FoodItem, FoodItem2 } from "@/Components/CombinedComponents";
import { useState } from "react";
import { AddToCartNormal, AddToCartWithCurry } from "../CombindedAdvanced";
export default function FoodItemCombined({
  Name,
  Image,
  desc,
  Rating,
  Curry = [
    {
      MainCurry: [1, 2, 3],
      Second: [4, 5, 6],
      Third: [7, 8, 9],
      Fourth: ["A"],
    },
  ],
}) {
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
        <FoodItem2
          Name={Name}
          imageNumber={Image}
          description={desc}
          rating={Rating}
          ClickFun={() => setVarient(0)}
          AddToCartFunc={() => {
            Curry == undefined || Curry == "" ? setVarient(3) : setVarient(3);
          }}
        />
      )}
      {varient == 2 && (
        <AddToCartNormal
          FoodName={Name}
          Description={desc}
          Tags={[1, 2, 3]}
          ImageName={Image}
          CloseButtonFunc={() => setVarient(1)}
        />
      )}
      {varient == 3 && (
        <AddToCartWithCurry
          FoodName={Name}
          Description={desc}
          Tags={[1, 2, 3]}
          ImageName={Image}
          Curry={Curry}
          CloseButtonFunc={() => setVarient(1)}
        />
      )}
    </div>
  );
}
