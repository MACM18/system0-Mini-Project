import Button from "../Button";
import { FoodItem, ItemCounter, TagList } from "../CombinedComponents";
import Label from "../Label";
import TitleBox from "../TitleBox";

export default function OrderConfirmationPage(props) {
  return (
    <div
      className={
        "bg-Green2 flex flex-auto flex-col w-full h-screen justify-between"
      }
    >
      <div className={"flex flex-auto flex-row gap-15 p-10"}>
        <div
          className={
            "w-1/3 flex flex-auto flex-col gap-10 border border-Green1 rounded-lg p-10 backdrop-blur-md shadow-md shadow-Green1"
          }
        >
          <div className={"flex flex-auto flex-row gap-5"}>
            <Label text={props.ID} />
            <Label text={props.Date} />
          </div>
          <div>
            <Label text={props.Name} />
          </div>
          <TagList tags={props.tags} />
        </div>
        <TitleBox title={"Order Confirmation"} />
      </div>
      <div className={"p-10 overflow-y-scroll"}>
        {props.order.map((item, index) => (
          <div
            key={index}
            className={
              "flex flex-auto flex-row gap-40 items-end p-5 m-1 bg-white rounded-lg"
            }
          >
            <FoodItem Name={item.Name} imageNumber={item.Image} />
            <Label text={item.Amount} />
            <Label text={"Rs. " + item.Price + ".00"} />
            <Button text={"Remove"} />
          </div>
        ))}
      </div>
      <div
        className={
          "p-10 m-2 w-fit bg-Green3 rounded-2xl border border-black self-end"
        }
      >
        <Label text={"Rs. " + props.Total + ".00"} />
      </div>
      <div className={"flex flex-auto flex-row gap-15 p-10 self-end"}>
        <Button text={"Cancel"} />
        <Button text={"Place Order"} />
      </div>
    </div>
  );
}