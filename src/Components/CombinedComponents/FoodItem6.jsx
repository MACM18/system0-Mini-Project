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
        "bg-white p-15 shadow-lg shadow-black rounded-lg flex flex-1 flex-col  gap-30 w-full h-screen"
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
        className={"w-full flex flex-1 justify-start flex-row gap-15 max-h-fit"}
      >
        <Label text={"Meals"} width="fit" />
        <input
          type="checkbox"
          name="Breakfast"
          id="BF"
          value={"Breakfast"}
          onClick={() => {
            setBF(!BF);
          }}
        />
        <label htmlFor="BF">Breakfast</label>
        <input
          type="checkbox"
          name="Lunch"
          id="LH"
          value={"Lunch"}
          onClick={() => {
            setLH(!LH);
          }}
        />
        <label htmlFor="LH">Lunch</label>
        <input
          type="checkbox"
          name="Dinner"
          id="DR"
          value={"Dinner"}
          onClick={() => {
            setDR(!DR);
          }}
        />
        <label htmlFor="DR">Dinner</label>
      </div>
      <div
        className={"w-full flex flex-1 justify-start flex-row gap-15 max-h-fit"}
      >
        <Label text={"Type"} width="fit" />
        <input
          type="checkbox"
          name="Chicken"
          id="Chicken"
          value={"Chicken"}
          onClick={() => {
            setChicken(!chicken);
          }}
        />
        <label htmlFor="Chicken">Chicken</label>
        <input
          type="checkbox"
          name="Fish"
          id="Fish"
          value={"Fish"}
          onClick={() => {
            setFish(!fish);
          }}
        />
        <label htmlFor="Fish">Fish</label>
        <input
          type="checkbox"
          name="Egg"
          id="Egg"
          value={"Egg"}
          onClick={() => {
            setEgg(!egg);
          }}
        />
        <label htmlFor="Egg">Egg</label>
        <input
          type="checkbox"
          name="Veg"
          id="Veg"
          value={"Veg"}
          onClick={() => {
            setVeg(!veg);
          }}
        />
        <label htmlFor="Veg">Veg</label>
        <input
          type="checkbox"
          name="Fried Fish"
          id="Fried Fish"
          value={"Fried Fish"}
          onClick={() => {
            setFFish(!fFish);
          }}
        />
        <label htmlFor="Fried Fish">Fried Fish</label>
      </div>
      <div className={"w-full h-fit flex flex-1 flex-row justify-end"}>
        <Button text={"Create"} onClickFun={InsertFunc} />
      </div>
    </div>
  );
}
