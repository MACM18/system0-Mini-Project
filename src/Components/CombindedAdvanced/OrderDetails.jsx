import { useState } from "react";
import Button from "../Button";
import { DropDown, FoodItem, TagList } from "../CombinedComponents";
import Label from "../Label";
const axios = require("axios");
export default function OrderDetails(props) {
  const [menuExpanded, setMenuExpanded] = useState(false);
  let arrow = "🔽";
  menuExpanded == false ? (arrow = "🔽") : (arrow = "🔼");
  async function updateStatus(event) {
    let data = {
      Selection: "_id",
      value: props._id,
      Fields: { Status: event.target.value },
    };

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/Orders/",
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
        "w-full h-fit max-h-screen  p-10 bg-Green3 flex flex-auto flex-col gap-10 justify-between rounded-lg "
      }
    >
      <div
        className={
          "h-fit bg-white p-10 rounded-lg flex flex-auto flex-row gap-30 items-center"
        }
      >
        <div className={"w-4/6"}>
          <Label text={props.UserName} width="fit" />
        </div>
        <div className={" w-2/6 flex flex-auto flex-row gap-15 items-center"}>
          <DropDown
            Title={props.Status}
            List={["Abandoned", "Canceled", "Complete", "Pending"]}
            handleChange={updateStatus}
          />
          <Label text={props.Price} width="fit" />
        </div>
      </div>
      <div
        className={
          "h-fit bg-white p-10 rounded-lg flex flex-auto flex-row gap-15 items-center"
        }
      >
        <Label text={props.Meal} />
        {/* <TagList tags={props.Items.Name} /> */}
        <Button
          text={arrow}
          onClickFun={() => {
            menuExpanded == true
              ? setMenuExpanded(false)
              : menuExpanded == false
              ? setMenuExpanded(true)
              : null;
          }}
        />
      </div>
      {menuExpanded && (
        <div
          className={
            "h-full p-10 rounded-lg flex flex-auto flex-col gap-10 items-start overflow-y-scroll"
          }
        >
          {props.Items.map((item) => (
            <div
              key={item._id}
              className={
                "bg-white w-full p-10 rounded-lg flex flex-auto flex-row gap-10 items-end"
              }
            >
              <Label text={item.Name} />
              <Label text={item.Type} />
              {/* <Label text={item.Amount} /> */}
              <Label text={item.Price} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
