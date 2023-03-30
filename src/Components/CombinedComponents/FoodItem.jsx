export default function foodItem({ Name, imageNumber, MouseOver }) {
  return (
    <div
      onMouseOver={MouseOver}
      className={
        "min-w-28 min-h-36 max-w-fit bg-Green1 rounded-xl border border-black shadow-md shadow-Green1 p-15 flex  flex-1 flex-col gap-3.5"
      }
    >
      <div
        className={
          "w-20 h-20 bg-white shrink-0 rounded-lg border border-black shadow-sm shadow-black"
        }
      >
        <img
          src="../src/+{imageNumber}"
          className={"w-full h-full"}
          alt={imageNumber}
        ></img>
      </div>
      <div className={"w-auto h-auto "}>
        <p className={"font-medium text-center text-lg"}>{Name}</p>
      </div>
    </div>
  );
}
