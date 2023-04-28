export default function foodItem({ Name, imageNumber, ClickFun }) {
  return (
    <div
      onClick={ClickFun}
      className={
        "w-28 min-h-36 bg-Green1 rounded-xl border border-black shadow-md shadow-Green1 p-2 flex  flex-1 flex-col items-center gap-1"
      }
    >
      <div
        className={
          "w-20 h-20 bg-white shrink-0 rounded-lg border border-black shadow-sm shadow-black"
        }
      >
        <img
          src={"/Resources/Food/" + imageNumber}
          className={"w-full h-full"}
          alt={imageNumber}
        ></img>
      </div>
      <div className={"w-full h-auto "}>
        <p className={"font-medium text-center text-md"}>{Name}</p>
      </div>
    </div>
  );
}
