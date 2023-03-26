// Need to be modfied the onClick function and text allignment

import { useState } from "react";

export default function TextBox({
  title = "",
  placeholder,
  value,
  type = "Text",
  handleChange,
}) {
  return (
    <div
      className={
        "bg-Green1 rounded-lg p-15 flex flex-auto flex-row justify-between gap-15 shadow-inner shadow-black"
      }
    >
      {title != "" ? <div className={"font-light w-fit"}>{title}</div> : null}
      <input
        className="w-full rounded-lg indent-2 "
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
}
