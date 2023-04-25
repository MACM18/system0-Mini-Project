import { Button, Label, TitleBox } from "@/Components";
import { SideBarUser } from "@/Components/CombindedAdvanced";

export default function Cart(props) {
  // const storedValue =
  //   typeof window !== "undefined" && localStorage.getItem("CartID");
  return (
    <div
      className={
        "bg-Green2 w-full h-screen rounded-lg flex flex-1 flex-row gap-15"
      }
    >
      <div className="bg-white w-full h-full rounded-lg p-15 flex flex-1 flex-col gap-15">
        <TitleBox title={"Cart"} />
        <Label text={props.ID} />
        <div className={"w-full h-full"}>
          {props.Carts != undefined &&
            props.Carts.map((order) => (
              <div className={"w-full h-fit p-10 bg-white rounded-lg"}>
                <div>
                  <Label text={order.UserName} width={"fit"} />
                  <Label text={order.Status} width={"fit"} />
                </div>
                <div>
                  {
                    console.log(order.Items)
                    //   order.Items.map((item) => (
                    //     <>
                    //       <div>{item.Name}</div>
                    //       <div>{item.Amount}</div>
                    //       <div>{item.Price}</div>
                    //     </>
                    //   ))
                  }
                </div>
              </div>
            ))}
          <div>
            <Label text={props.Carts.Total} />
          </div>
          <div>
            <Button text={"Cancel"} />
            <Button text={"Submit"} />
          </div>
        </div>
      </div>
    </div>
  );
}
