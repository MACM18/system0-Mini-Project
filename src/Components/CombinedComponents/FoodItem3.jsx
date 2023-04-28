import { Label } from "..";
export default function foodItem({ Name, imageNumber, Amount, Price }) {
  return (
    <div
      className={
        "min-h-36 w-80 bg-Green1 rounded-xl border border-black shadow-md shadow-Green1 p-15 flex flex-1 flex-row"
      }
    >
      <div
        className={
          "flex flex-initial flex-col w-20 justify-between items-center gap-15"
        }
      >
        <div
          className={
            "w-20 h-20 bg-white rounded-lg border border-black shadow-sm shadow-black"
          }
        >
          <img
            src={"/Resources/Food/" + imageNumber}
            className={"w-full h-full"}
            alt={imageNumber}
          ></img>
        </div>
        <p className={"font-medium text-center text-lg"}>{Name}</p>
      </div>
      <div
        className={"flex flex-1 flex-col w-40 justify-between items-end gap-15"}
      >
        <Label
          text={"Amount: " + Amount}
          width={"fit"}
          shadow={"transparent"}
        />
        <Label text={"Price: " + Price} width={"fit"} shadow={"transparent"} />
      </div>
    </div>
  );
}
