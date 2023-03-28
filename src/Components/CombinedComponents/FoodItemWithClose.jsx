import Image from "next/image";
export default function foodItem({ Name, imageNumber }) {
  return (
    <div
      className={
        "min-w-28 min-h-36 max-w-fit bg-Green1 rounded-xl border border-black shadow-md shadow-Green1 p-15 flex items-end  flex-1 flex-col gap-3.5"
      }
    >
      <div
        className={
          "w-6 h-6 bg-Red text-black rounded-full shadow-sm shadow-black flex flex-auto p-2 justify-center hover:shadow-none"
        }
      >
        <Image className={
          'hover:fill-white'
        }
          src={"/Resources/Vectors/x.png"}
          alt={"x"}
          width={12}
          height={12}
        />
      </div>
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
