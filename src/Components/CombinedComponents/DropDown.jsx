import { Label } from "..";
import Image from "next/image";
import { useState } from "react";
export default function DropDown(props) {
  const [dropDownStatus, setDropDownStatus] = useState(false);
  const [imagePosition, setImagePosition] = useState("rotate-0");
  const [title, setTitle] = useState(
    props.Title
  );
  let image = (
    <Image
      className={imagePosition}
      src={"/Resources/Vectors/Drop Down Arrow Down.png"}
      width={20}
      height={10}
      alt="arrow"
    />
  );
  const dropDown = () => {
    dropDownStatus == false
      ? setDropDownStatus(true)
      : dropDownStatus == true
      ? setDropDownStatus(false)
      : null;
    imagePosition == "rotate-0"
      ? setImagePosition("rotate-180")
      : imagePosition == "rotate-180"
      ? setImagePosition("rotate-0")
      : null;
  };
  const dropDownRestore = () => {
    setDropDownStatus(false);
    setImagePosition("Down");
  };
  return (
    <div
      onClick={props.List != undefined ? dropDown : null}
      className={
        "w-fit h-fit p-5 bg-Green1 shadow-lg shadow-black rounded-lg flex flex-1 flex-col gap-5"
      }
    >
      <div
        className={"flex flex-1 flex-row items-center justify-between gap-15"}
      >
        <p className={"text-left font-bold w-auto"}>{title}</p>
        <div
          onClick={dropDownRestore}
          className={
            "bg-white rounded-lg p-1 w-fit h-fit shadow-md flex flex-initial justify-around"
          }
        >
          {image}
        </div>
      </div>
      {dropDownStatus && <div className={"border-b-2 w-full"}></div>}
      {dropDownStatus && (
        <div className={"h-fit p-5 flex flex-1 flex-col"}>
          {props.List != undefined &&
            props.List.map((ListItem, index) => (
              <Label
                key={index}
                text={ListItem}
                shadow="transparent"
                handleClick={() => {
                  setTitle(ListItem);
                  setImagePosition("Down");
                }}
              />
            ))}
        </div>
      )}
    </div>
  );
}
