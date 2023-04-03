import { TitleBox, TextArea, Label, Button } from "..";
import { ItemCounter, TagList } from "../CombinedComponents";
import Image from "next/image";
import { useState } from "react";
export default function AddToCartNormal(props) {
  const [total, setTotal] = useState(props.Price);
  const calcPrice = (amount) => {
    setTotal(amount * props.Price);
  };
  return (
    <div
      className={
        "flex w-auto border border-black p-15 flex-1 flex-col gap-15 bg-Green3 rounded-lg relative shadow-xl shadow-black"
      }
    >
      <div
        onClick={props.CloseButtonFunc}
        className={
          "w-6 h-6 bg-Red text-black absolute top-1 right-1 rounded-full shadow-sm shadow-black flex flex-auto p-2 justify-center hover:shadow-none"
        }
      >
        <Image
          className={"hover:fill-white"}
          src={"/Resources/Vectors/x.png"}
          alt={"x"}
          width={12}
          height={12}
        />
      </div>
      <div className={"flex flex-1 w-fill h-fit flex-row gap-15"}>
        <div className={"flex flex-1 flex-col gap-15 h-fit w-full"}>
          <TitleBox title={props.FoodName} />
          <TagList tags={props.Tags} />
          <TextArea description={props.Description} />
        </div>

        <Image
          src={"/Resources/Food/" + props.ImageName + ".jpg"}
          width={250}
          height={250}
          alt={props.ImageName}
        />
      </div>
      <div
        className={
          "flex flex-1 flex-row w-full h-hug gap-15 items-center justify-between"
        }
      >
        <div className="w-48">
          <ItemCounter onUpdate={calcPrice} />
        </div>
        <Label text={"Rs. " + total + ".00"} width="fit" />
        <Button text={"ADD to Cart"} />
      </div>
    </div>
  );
}
