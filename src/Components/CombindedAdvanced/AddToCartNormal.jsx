import axios from "axios";
import { TitleBox, TextArea, Label, Button } from "..";
import { ItemCounter, TagList } from "../CombinedComponents";
import Image from "next/image";
import { useState } from "react";
// import Cart from "@/Database/models/Cart";
export default function AddToCartNormal(props) {
  const [total, setTotal] = useState(props.Price);
  const [amount, setAmount] = useState(1);
  const calcPrice = (amount) => {
    setTotal(amount * props.Price);
    setAmount(amount);
  };
  async function AddToCart() {
    let data = {
      UserName: localStorage.getItem("CurrentUser"),
      Status: "Pending",
      Items: [{ Name: props.FoodName, Amount: amount, Price: total }],
    };
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/Cart/?Method=Insert",
      headers: {},
      data: data,
    };
    const response = await axios(config);
    localStorage.setItem("CartID", await response.data._id);
    let data2 = {
      id: localStorage.getItem("CartID"),
      newItems: [{ Name: props.FoodName, Amount: amount, Price: total }],
    };
    let config2 = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/Cart/special",
      headers: {},
      data: data2,
    };
    const response2 = await axios(config2);
    const Items = await response2.data;
    console.log(Items);
  }
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
        <Button text={"ADD to Cart"} onClickFun={AddToCart} />
      </div>
    </div>
  );
}
