import axios from "axios";
import { TitleBox, TextArea, Label, Button } from "..";
import { ItemCounter, TagList } from "../CombinedComponents";
import Image from "next/image";
import { useState } from "react";
// import Cart from "@/Database/models/Cart";
export default function AddToCartNormal(props) {
  const [total, setTotal] = useState(props.Price);
  const [amount, setAmount] = useState(1);
  // const [price, setPrice] = useState(0);
  // const [iteration, setIteration] = useState(0);
  const calcPrice = (amount) => {
    setTotal(amount * props.Price);
    setAmount(amount);
  };
  async function AddToCart() {
    if (localStorage.getItem("CurrentUser") != undefined) {
      if (localStorage.getItem("CartID") == undefined) {
        let data = {
          UserName: localStorage.getItem("CurrentUser"),
          Status: "Pending",
          Items: [{ Name: props.FoodName, Amount: amount, Price: total }],
          Price: total,
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
        // setPrice(price + (await response.Price));
        console.log(localStorage.getItem("CartID"));
      } else {
        let data2 = {
          id: localStorage.getItem("CartID"),
          newItems: { Name: props.FoodName, Amount: amount, Price: total },
        };
        console.log(localStorage.getItem("CartID"));
        let config2 = {
          method: "post",
          maxBodyLength: Infinity,
          url: "http://localhost:3000/api/Cart/special",
          headers: {},
          data: data2,
        };
        const response2 = await axios(config2);
        const Items = await response2.data;
        // console.log(Items);
      }
      //   let config3 = {
      //     method: "put",
      //     maxBodyLength: Infinity,
      //     url: "http://localhost:3000/api/Cart/",
      //     headers:{},
      //     data:{Selection:"_id",
      //   value:localStorage.getItem("CartID"),
      // Fields:{Price:price}}
      //   };
    }
  }
  return (
    <div
      className={
        "flex w-auto border-2 border-Green1 p-2 flex-1 flex-col gap-15 bg-gradient-to-bl from-Green3 to-Green2 backdrop-blur-sm rounded-lg absolute shadow-xl shadow-black"
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
          <Label text={props.Description} />
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
