import Image from "next/image";
export default function foodItem5({ onClickFunc }) {
  return (
    <div
      className={
        "min-w-28 min-h-36 max-w-fit bg-Green1 rounded-xl border cursor-pointer border-black shadow-md shadow-Green1 p-15 flex  flex-1 flex-col justify-center hover:shadow-none"
      }
      onClick={onClickFunc}
    >
      <div
        className={
          "w-full h-full bg-white rounded-lg shadow-sm shadow-black flex flex-auto justify-center px-15 py-6"
        }
      >
        <Image
          src={"/Resources/Vectors/Food Item +.png"}
          alt="+"
          width={86}
          height={86}
        />
      </div>
    </div>
  );
}
