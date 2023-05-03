import Rating from "@/Components/Rating.jsx";
import Image from "next/image";
import Button from "../Button";
import Label from "../Label";
export default function foodItem2({
  Name,
  price,
  imageNumber,
  description,
  rating,
  ClickFun,
  AddToCartFunc,
}) {
  return (
    <div
      className={
        "min-h-36 w-80 bg-white rounded-xl border-2 border-Green1 text-Green1 shadow-md shadow-Green1 p-2 flex flex-1 flex-row gap-1"
      }
    >
      <div className={"flex  flex-col w-20 justify-around gap-15"}>
        <div
          className={
            "w-20 h-20 bg-white rounded-lg border border-Green1 shadow-sm shadow-black"
          }
        >
          <img
            src={"/Resources/Food/" + imageNumber}
            className={"w-full h-full"}
            alt={imageNumber}
          ></img>
        </div>
        <div>
          <Rating value={rating} />
        </div>
      </div>
      <div
        className={
          "flex flex-1 flex-col relative w-48 justify-between items-end gap-15"
        }
      >
        <div
          className={
            "w-6 h-6 bg-Red absolute top-0 right-0 text-black rounded-full shadow-sm shadow-black flex flex-auto p-2 justify-center hover:shadow-none"
          }
          onClick={ClickFun}
        >
          <Image
            className={"hover:fill-white "}
            src={"/Resources/Vectors/x.png"}
            alt={"x"}
            width={12}
            height={12}
          />
        </div>
        <div className={"w-full h-fit"}>
          <p className={"font-medium text-left text-lg"}>{Name}</p>
        </div>
        <div className={"w-full h-full"}>
          <p className={"text-left"}>{description}</p>
        </div>
        <div>
          <Label text={"Rs." + price + ".00"} />
        </div>
        <Button text={"ADD"} onClickFun={AddToCartFunc} />
      </div>
      ;
    </div>
  );
}
