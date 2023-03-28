import { TitleBox, TextArea, Label, Button } from "..";
import { ItemCounter, TagList, DropDown } from "../CombinedComponents";
import Image from "next/image";
import { useState } from "react";
export default function AddToCartWithCurry(props) {
  const [total, setTotal] = useState(props.Price);
  //   const [amount,setAmount]=useState(0);
  const calcPrice = (amount) => {
    setTotal(amount * props.Price);
  };
  return (
    <div className={"flex flex-1 flex-col gap-20 bg-Green3 rounded-lg"}>
      <div className={"flex flex-1 w-fill h-fit flex-row gap-15"}>
        <div className={"flex flex-1 flex-col gap-15 h-fit w-full"}>
          <TitleBox title={props.FoodName} />
          <TagList tags={props.tags} />
          <TextArea description={props.Description} />
          <div className="flex flex-1 flex-row gap-15 justify-between w-full h-fit">
            <DropDown List={props.MainCurry} />
            <DropDown List={props.Second} />
            <DropDown List={props.Third} />
            <DropDown List={props.Fourth} />
          </div>
        </div>

        <Image
          src={"/Resources/Food/" + props.ImageName + ".jpg"}
          width={250}
          height={250}
          alt={props.ImageName}
        />
      </div>
      <div className={"flex flex-1 flex-row w-full h-hug justify-between"}>
        <div className="w-48">
          <ItemCounter onUpdate={calcPrice} />
        </div>
        <Label text={"Rs. " + total + ".00"} width="fit" />
        <Button text={"ADD to Cart"} />
      </div>
    </div>
  );
}
