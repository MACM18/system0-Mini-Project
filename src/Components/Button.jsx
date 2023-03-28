import Link from "next/link";
export default function Button({ text, onClickFun }) {
  return (
    <div
      className={
        "p-10 border group border-white rounded-xl bg-Green1 w-fit h-fit shadow-lg shadow-black visited:shadow-sm hover:border-Green1 hover:bg-white hover:cursor-pointer"
      }
      onClick={onClickFun}
    >
      <text
        className={
          "text-lg text-white font-extrabold text-center group-hover:text-Green1"
        }
      >
        {text}
      </text>
    </div>
  );
}
