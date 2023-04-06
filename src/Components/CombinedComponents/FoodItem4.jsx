import { TextArea, Button, TextBox, TitleBox, Tags } from "..";
import { TagList } from "@/Components/CombinedComponents";

export default function FoodItem4(props) {
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
        <TextBox title={"New Name"} />
        <TextBox title={"Image name"} />
        <TextArea description={"Description"} />
        <TextBox title={"Price"} />
      </div>
      <div
        className={"w-full flex flex-1 justify-start flex-row gap-15 max-h-fit"}
      >
        <TagList tags={props.List} />
      </div>
      <div className={"w-full h-fit flex flex-1 flex-row justify-between"}>
        <Button text={"Remove"} onClickFun={props.RemoveFunc} />
        <Button text={"Update"} onClickFun={props.UpdateFunc} />
      </div>
    </div>
  );
}
