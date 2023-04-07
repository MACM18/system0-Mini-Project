import { useState } from "react";
import Button from "../Button";
import { DropDown, FoodItem, TagList } from "../CombinedComponents";
import Label from "../Label";

export default function OrderDetails(props) {
  const [menuExpanded, setMenuExpanded] = useState(false);
  let arrow = "🔽";
  menuExpanded == false ? (arrow = "🔽") : (arrow = "🔼");
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
        <div className={"w-5/6"}>
          <Label text={"ID"} width="fit" />
        </div>
        <div className={" w-1/6 flex flex-auto flex-row gap-15 items-center"}>
          <DropDown Title={"Status"} List={[1, 2, 3, 4]} />
          <Label text={"Price"} width="fit" />
        </div>
      </div>
      <div
        className={
          "h-fit bg-white p-10 rounded-lg flex flex-auto flex-row gap-15 items-center"
        }
      >
        <Label text={"Name"} />
        <TagList tags={props.tags} />
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
          {props.order.map((item, index) => (
            <div
              className={
                "bg-white w-full p-10 rounded-lg flex flex-auto flex-row gap-10 items-end"
              }
            >
              <FoodItem Name={item.Name} imageNumber={item.Image} />
              <TagList tags={item.tags} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
