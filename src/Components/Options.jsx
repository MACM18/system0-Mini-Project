import Image from "next/image";
export default function options({ text, opt, ClickFunc }) {
  return (
    <div
      className={
        "bg-Green1 group rounded-lg shadow-inner shadow-black p-15 flex flex-1 flex-row gap-15 w-auto h-auto items-center"
      }
      onClick={ClickFunc}
    >
      <div
        className={
          "h-10 w-10 border border-black cursor-pointer rounded-lg bg-white flex flex-initial flex-row justify-around items-center"
        }
      >
        {opt}
      </div>
      <div
        className={
          "text-left font-medium text-black w-full h-full indent-1 bg-transparent"
        }
      >
        {text}
      </div>
    </div>
  );
}
