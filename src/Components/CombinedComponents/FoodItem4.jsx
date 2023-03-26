import TitleBox from "../TitleBox";
import TextArea from "../TextArea";
import Button from "../Button";
import TextBoxGreen from "../TextBox";
import Tag from "../Tags";

export default function foodItem({ Name, imageNumber }) {
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
        <TextBoxGreen title={"New Name"} />
        <TextArea description={"Description"} />
        <TextBoxGreen title={"Price"} />
      </div>
      <div className={"w-full flex flex-1 flex-row gap-15 max-h-fit"}>
        <Tag text={"Tag"} />
        <Tag text={"Tag"} />
        <Tag text={"Tag"} />
        <Tag text={"Tag"} />
        <Tag text={"+"} />
      </div>
      <div className={"w-full h-fit flex flex-1 flex-row justify-between"}>
        <Button text={"Remove"} />
        <Button text={"Update"} />
      </div>
    </div>
  );
}
