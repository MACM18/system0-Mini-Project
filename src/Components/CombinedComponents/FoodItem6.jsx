import { useState } from "react";
import { TextArea, Button, TextBox, TitleBox, Tags, Label } from "..";
import { Alert, TagList } from "@/Components/CombinedComponents";
const axios = require("axios");
export default function FoodItem6(props) {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [desc, setDesc] = useState();
  const [price, setPrice] = useState();
  const [BF, setBF] = useState(false);
  const [LH, setLH] = useState(false);
  const [DR, setDR] = useState(false);
  const [chicken, setChicken] = useState(false);
  const [egg, setEgg] = useState(false);
  const [fish, setFish] = useState(false);
  const [veg, setVeg] = useState(false);
  const [fFish, setFFish] = useState(false);
  const [updateVisibility, setUpdateVisibility] = useState(false);
  const [deleteVisibility, setDeleteVisibility] = useState(false);
  const [deleteDecison, setDeleteDEcison] = useState(false);
  let Meals = [];
  let Types = [];
  let Tagss = [];

  async function InsertFunc() {
    if (BF == true) {
      Meals.push("Breakfast");
      Tagss.push("Breakfast");
    }
    if (LH == true) {
      Meals.push("Lunch");
      Tagss.push("Lunch");
    }
    if (DR == true) {
      Meals.push("Dinner");
      Tagss.push("Dinner");
    }
    if (chicken == true) {
      Types.push("Chicken");
      Tagss.push("Chicken");
    }
    if (fish == true) {
      Types.push("Fish");
      Tagss.push("Fish");
    }
    if (egg == true) {
      Types.push("Egg");
      Tagss.push("Egg");
    }
    if (veg == true) {
      Types.push("Veg");
      Tagss.push("Veg");
    }
    if (fFish == true) {
      Types.push("Fried Fish");
      Tagss.push("Fried Fish");
    }
    let data = {
      Name: name,
      Type: Types,
      Meal: Meals,
      Price: price,
      Rating: Math.floor(Math.random() * 5),
      Image: image,
      Description: desc,
      Tags: Tagss,
    };

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/FoodItem/?Method=Insert",
      headers: {},
      data: data,
    };
    try {
      const response = await axios(config);
      const output = await response.data;
      console.log(output);
      // console.log(Meals);
      // console.log(Types);
      // console.log(Tagss);
      Meals = [];
      Types = [];
      Tagss = [];
      setUpdateVisibility(true);
      setTimeout(() => {
        setUpdateVisibility(false);
      }, 3000);
    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    <div
      className={
        "bg-white p-2 shadow-lg shadow-black rounded-lg flex flex-1 flex-col  gap-30 w-full h-fit"
      }
    >
      {updateVisibility && <Alert Text="Item Added!" />}
      <div className={"w-full h-fit flex flex-1 flex-row gap-15"}>
        <div
          className={
            "w-20 h-20 bg-white rounded-lg border border-black shadow-sm shadow-black"
          }
        >
          <img
            src={"/Resources/Food/" + image}
            className={"w-full h-full"}
            alt={"image"}
          ></img>
        </div>
        <TitleBox title={"Add New Item"} />
        <Button text={"Cancel"} onClickFun={props.CancelFunc} />
      </div>
      <div className={"w-full h-full flex flex-1 flex-col gap-15"}>
        <TextBox
          title={"Name"}
          handleChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextBox
          title={"Image name"}
          handleChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <TextArea
          handleChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <TextBox
          title={"Price"}
          handleChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <div
        className={
          "w-full flex flex-1 justify-start flex-row gap-15 max-h-fit items-center"
        }
      >
        <Label text={"Meals"} width="fit" />
        <input
          type="checkbox"
          name="Breakfast"
          id="BF"
          value={"Breakfast"}
          className=" w-6 h-6"
          onClick={() => {
            setBF(!BF);
          }}
        />
        <label className="text-Green1 font-medium" htmlFor="BF">
          Breakfast
        </label>
        <input
          type="checkbox"
          name="Lunch"
          id="LH"
          value={"Lunch"}
          className=" w-6 h-6"
          onClick={() => {
            setLH(!LH);
          }}
        />
        <label className="text-Green1 font-medium" htmlFor="LH">
          Lunch
        </label>
        <input
          type="checkbox"
          name="Dinner"
          id="DR"
          value={"Dinner"}
          className=" w-6 h-6"
          onClick={() => {
            setDR(!DR);
          }}
        />
        <label className="text-Green1 font-medium" htmlFor="DR">
          Dinner
        </label>
      </div>
      <div
        className={
          "w-full flex flex-1 justify-start flex-row gap-15 max-h-fit items-center"
        }
      >
        <Label text={"Type"} width="fit" />
        <input
          type="checkbox"
          name="Chicken"
          id="Chicken"
          value={"Chicken"}
          className=" w-6 h-6"
          onClick={() => {
            setChicken(!chicken);
          }}
        />
        <label className="text-Green1 font-medium" htmlFor="Chicken">
          Chicken
        </label>
        <input
          type="checkbox"
          name="Fish"
          id="Fish"
          value={"Fish"}
          className=" w-6 h-6"
          onClick={() => {
            setFish(!fish);
          }}
        />
        <label className="text-Green1 font-medium" htmlFor="Fish">
          Fish
        </label>
        <input
          type="checkbox"
          name="Egg"
          id="Egg"
          value={"Egg"}
          className=" w-6 h-6"
          onClick={() => {
            setEgg(!egg);
          }}
        />
        <label className="text-Green1 font-medium" htmlFor="Egg">
          Egg
        </label>
        <input
          type="checkbox"
          name="Veg"
          id="Veg"
          value={"Veg"}
          className=" w-6 h-6"
          onClick={() => {
            setVeg(!veg);
          }}
        />
        <label className="text-Green1 font-medium" htmlFor="Veg">
          Veg
        </label>
        <input
          type="checkbox"
          name="Fried Fish"
          id="Fried Fish"
          value={"Fried Fish"}
          className=" w-6 h-6"
          onClick={() => {
            setFFish(!fFish);
          }}
        />
        <label className="text-Green1 font-medium" htmlFor="Fried Fish">
          Fried Fish
        </label>
      </div>
      <div className={"w-full h-fit flex flex-1 flex-row justify-end"}>
        <Button text={"Create"} onClickFun={InsertFunc} />
      </div>
    </div>
  );
}
