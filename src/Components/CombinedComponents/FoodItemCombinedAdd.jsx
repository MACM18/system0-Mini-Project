import { FoodItem6 } from "@/Components/CombinedComponents";
import { useState } from "react";
import Button from "../Button";
import { AddToCartNormal, AddToCartWithCurry } from "../CombindedAdvanced";
export default function FoodItemCombinedAdd() {
  const [varient, setVarient] = useState(0);
  return (
    <div className="w-fit h-fit absolute bottom-3 right-3">
      {varient == 0 && (
        <div className="p-2 bg-white border-2 border-Green1 rounded-md">
          <Button text={"➕ Add"} onClickFun={() => setVarient(1)} />
        </div>
      )}
      {varient == 1 && <FoodItem6 CancelFunc={() => setVarient(0)} />}
    </div>
  );
}
