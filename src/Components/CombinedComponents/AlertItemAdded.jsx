import { useState } from "react";
import Label from "../Label";

export default function AlertItemAdded(props) {
  return (
    <div
      className={
        "w-fit h-fit p-15 bg-Green3 backdrop-blur-md shadow-lg shadow-Green3 gap-15 absolute right-4 top-4 rounded-lg flex flex-auto flex-row"
      }
    >
      <Label text={props.Name} />
      <Label text={"Added!"} />
    </div>
  );
}
