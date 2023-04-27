import { useState } from "react";
import { TextArea, Button, TextBox, TitleBox, Tags, Label } from "..";
import { TagList } from "@/Components/CombinedComponents";
const axios = require("axios");
export default function FoodItem4(props) {
  const [name, setName] = useState(props.Name);
  const [image, setImage] = useState(props.imageNumber);
  const [desc, setDesc] = useState(props.description);
  const [price, setPrice] = useState(props.Price);
  const [BF, setBF] = useState(false);
  const [LH, setLH] = useState(false);
  const [DR, setDR] = useState(false);
  const [chicken, setChicken] = useState(false);
  const [egg, setEgg] = useState(false);
  const [fish, setFish] = useState(false);
  const [veg, setVeg] = useState(false);
  const [fFish, setFFish] = useState(false);
  let Meals = [];
  let Types = [];
  let Tagss = [];
  async function RemoveFunc() {
    let data = {
      _id: props.ID,
    };

    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/Fooditem/",
      headers: {},
      data: data,
    };
    try {
      const response = await axios(config);
      const output = await response.data;
      console.log(output);
    } catch (err) {
      console.error(err.message);
    }
  }
  async function UpdateFunc() {
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
      Selection: "_id",
      value: props.ID,
      Fields: {
        Name: name,
        Type: Types,
        Meal: Meals,
        Price: price,
        Image: image,
        Description: desc,
        Tags: Tagss,
      },
    };

    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/Fooditem/",
      headers: {},
      data: data,
    };
    try {
      const response = await axios(config);
      const output = await response.data;
      console.log(output);
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
      <div className={"w-full h-fit flex flex-1 flex-row gap-15"}>
        <div
          className={
            "w-20 h-20 bg-white rounded-lg border border-black shadow-sm shadow-black"
          }
        >
          <img
            src="../src/+{props.imageNumber}"
            className={"w-full h-full"}
            alt={props.imageNumber}
          ></img>
        </div>
        <TitleBox title={props.Name} />
        <Button text={"Cancel"} onClickFun={props.CancelFunc} />
      </div>
      <div className={"w-full h-full flex flex-1 flex-col gap-15"}>
        <TextBox
          title={"New Name"}
          value={props.Name}
          handleChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextBox
          title={"Image name"}
          value={props.imageNumber}
          handleChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <TextArea
          description={"Description"}
          value={props.description}
          handleChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <TextBox
          title={"Price"}
          value={props.Price}
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
        Breakfast
        <input
          type="checkbox"
          name="Lunch"
          id="LH"
          value={"Lunch"}
          onClick={() => {
            setLH(!LH);
          }}
        />
        Lunch
        <input
          type="checkbox"
          name="Dinner"
          id="DR"
          value={"Dinner"}
          onClick={() => {
            setDR(!DR);
          }}
        />
        Dinner
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
        <label for="Chicken">Chicken</label>
        <input
          type="checkbox"
          name="Fish"
          id="Fish"
          value={"Fish"}
          onClick={() => {
            setFish(!fish);
          }}
        />
        <label for="Fish">Fish</label>
        <input
          type="checkbox"
          name="Egg"
          id="Egg"
          value={"Egg"}
          onClick={() => {
            setEgg(!egg);
          }}
        />
        <label for="Egg">Egg</label>
        <input
          type="checkbox"
          name="Veg"
          id="Veg"
          value={"Veg"}
          onClick={() => {
            setVeg(!veg);
          }}
        />
        <label for="Veg">Veg</label>
        <input
          type="checkbox"
          name="Fried Fish"
          id="Fried Fish"
          value={"Fried Fish"}
          onClick={() => {
            setFFish(!fFish);
          }}
        />
        <label for="Fried Fish">Fried Fish</label>Fried Fish
      </div>
      <div className={"w-full h-fit flex flex-1 flex-row justify-between"}>
        <Button text={"Remove"} onClickFun={RemoveFunc} />
        <Button text={"Update"} onClickFun={UpdateFunc} />
      </div>
    </div>
  );
}
