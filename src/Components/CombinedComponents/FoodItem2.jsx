import Rating from "@/Components/Rating.jsx";
import Image from "next/image";
import Button from "../Button";
export default function foodItem2({
  Name,
  imageNumber,
  description,
  rating,
  ClickFun,
  AddToCartFunc,
}) {
  return (
    <div
      className={
        "min-h-36 w-80 bg-Green1 rounded-xl border border-black shadow-md shadow-Green1 p-15 flex flex-1 flex-row gap-3.5"
      }
    >
      <div
        className={
          "flex flex-initial flex-col w-20 justify-between items-start gap-15"
        }
      >
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
        <Rating value={rating} />
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
        <Button text={"ADD"} onClickFun={AddToCartFunc} />
      </div>
      ;
    </div>
  );
}
