import { Label } from "..";
import Image from "next/image";
import { useState } from "react";
export default function DropDown(props) {
  return (
    <select
      className={
        "h-fit border-2 border-Green1 bg-gradient-to-r from-Green1  rounded-lg p-5 flex flex-1 flex-col"
      }
      onChange={props.handleChange}
      value={props.Title}
    >
      {props.List != undefined &&
        props.List.map((ListItem, index) => (
          <option key={index}>{ListItem}</option>
        ))}
    </select>
  );
}
