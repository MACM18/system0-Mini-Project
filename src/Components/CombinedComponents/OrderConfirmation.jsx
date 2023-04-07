import Button from "../Button";
import Label from "../Label";
import TitleBox from "../TitleBox";

export default function RemoveConfirmation(props) {
  return (
    <div
      className={
        " border-Green2 border-2 rounded-lg shadow-lg w-fit h-fit p-15 backdrop-blur-md shadow-Green2 absolute inset-1/3 flex flex-auto flex-col gap-15"
      }
    >
      <TitleBox title={"Order Placement"} />
      <Label text={"Are you sure you want to Place the order?"} width="fit" />
      <div className={'flex flex-auto flex-row gap-5 items-center'}>
        <div
          className={
            "w-fit h-fit p-10 rounded-lg border border-Red shadow-md shadow-black"
          }
        >
          <p className={"text-Red font-bold underline"}>Warning!</p>
        </div>
        <Label
          text={"Order cancellation is not possible after an hour of placement"}
        />
      </div>
      <div className={"flex flex-auto flex-row gap-15 justify-center"}>
        <Button text={"Place Order"} onClickFun={props.RemoveFunc} />
        <Button text={"Go Back"} onClickFun={props.BackFunc} />
      </div>
    </div>
  );
}
