import { useState } from "react";
import Button from "../Button";
import Label from "../Label";

export default function OrderSummary(props) {
  const [visibility, setVisibility] = useState(false);
  let arrow = "🔽";
  visibility == true ? (arrow = "🔼") : (arrow = "🔽");
  return (
    <div>
      <div
        className={
          "flex flex-auto flex-row w-auto justify-between p-15 bg-Green2 rounded-lg m-2"
        }
      >
        <Label text={"Total Orders"} width="fit" />
        <div className={"flex flex-row gap-15 w-fit"}>
          <Label text={props.TotalAmount} width="fit" />
          <Button
            text={arrow}
            onClickFun={() => {
              visibility == true
                ? setVisibility(false)
                : visibility == false
                ? setVisibility(true)
                : null;
            }}
          />
        </div>
      </div>
      {visibility && (
        <div className={"bg-Green3 rounded-lg p-15 m-2"}>
          <div className={"p-5 flex flex-row justify-between"}>
            <Label text={"Cancelled"} width="fit" />
            <Label text={props.Canceled} width="fit" />
          </div>
          <div className={"p-5 flex flex-row justify-between"}>
            <Label text={"Completed"} width="fit" />
            <Label text={props.Completed} width="fit" />
          </div>
          <div className={"p-5 flex flex-row justify-between"}>
            <Label text={"Remaining"} width="fit" />
            <Label text={props.Remaining} width="fit" />
          </div>
          <div className={"p-5 flex flex-row justify-between"}>
            <Label text={"Abandoned"} width="fit" />
            <Label text={props.Abandoned} width="fit" />
          </div>
        </div>
      )}
    </div>
  );
}
