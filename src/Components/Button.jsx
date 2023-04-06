import Link from "next/link";
export default function Button({ text, onClickFun }) {
  return (
    <div
      className={
        "border p-5 group border-white rounded-xl bg-Green1 w-fit h-fit shadow-lg shadow-black visited:shadow-sm hover:border-Green1 hover:bg-white hover:cursor-pointer"
      }
      onClick={onClickFun}
    >
      <p
        className={
          "text-md text-white font-extrabold text-center group-hover:text-Green1"
        }
      >
        {text}
      </p>
    </div>
  );
}
