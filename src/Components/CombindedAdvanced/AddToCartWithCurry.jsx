import { TitleBox, TextArea, Label, Button } from "..";
import { ItemCounter, TagList, DropDown } from "../CombinedComponents";
import Image from "next/image";
import { useState } from "react";
export default function AddToCartWithCurry(props) {
  const [total, setTotal] = useState(props.Price);
  const calcPrice = (amount) => {
    setTotal(amount * props.Price);
  };
  return (
    <div
      className={
        "flex flex-1 flex-col gap-20 bg-Green3 rounded-lg border border-black p-15 relative shadow-xl shadow-black"
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
          <TagList tags={props.tags} />
          <TextArea description={props.Description} />

          <div className="flex flex-1 flex-row gap-15 justify-between w-full h-fit">
            {props.Curry != undefined &&
              props.Curry.map((CurryItem, index) => (
                <>
                  <DropDown Title="Main" List={CurryItem.MainCurry} />
                  <DropDown Title="Second" List={CurryItem.Second} />
                  <DropDown Title="Third" List={CurryItem.Third} />
                  <DropDown Title="Fourth" List={CurryItem.Fourth} />
                </>
              ))}
          </div>
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
          "flex flex-1 flex-row w-full items-center gap-10 h-hug justify-between"
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
