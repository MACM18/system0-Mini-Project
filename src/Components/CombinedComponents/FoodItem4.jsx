import { TextArea, Button, TextBox, TitleBox, Tags } from "..";
import { TagList } from "@/Components/CombinedComponents";

export default function FoodItem4({ Name, imageNumber, List }) {
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
            src="../src/+{imageNumber}"
            className={"w-full h-full"}
            alt={imageNumber}
          ></img>
        </div>
        <TitleBox title={Name} />
        <Button text={"Cancel"} />
      </div>
      <div className={"w-full h-full flex flex-1 flex-col gap-15"}>
        <TextBox title={"New Name"} />
        <TextArea description={"Description"} />
        <TextBox title={"Price"} />
      </div>
      <div
        className={"w-full flex flex-1 justify-start flex-row gap-15 max-h-fit"}
      >
        <TagList List={List} />
        <Tags text={"+"} />
      </div>
      <div className={"w-full h-fit flex flex-1 flex-row justify-between"}>
        <Button text={"Remove"} />
        <Button text={"Update"} />
      </div>
    </div>
  );
}
