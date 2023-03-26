import Rating from "@/Components/Rating.jsx";
export default function foodItem({ Name, imageNumber, description, rating }) {
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
          "flex flex-1 flex-col w-48 justify-between items-start gap-15"
        }
      >
        <div className={"w-full h-fit"}>
          <p className={"font-medium text-left text-lg"}>{Name}</p>
        </div>
        <div className={"w-full h-full"}>
          <p className={"text-left"}>{description}</p>
        </div>
      </div>
    </div>
  );
}
