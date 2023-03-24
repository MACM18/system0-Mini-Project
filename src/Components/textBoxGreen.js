// Need to be modfied the onClick function and text allignment

export default function textBoxGreen({ title, placeholder, width = "full" }) {
  // let textWidth='w-fit', visibility='visible';

  return (
    <div
      className={
        "h-fit bg-Green1 rounded-lg p-15 flex flex-auto flex-row justify-between gap-15 shadow-inner shadow-black"
      }
    >
      <div className={"font-light w-fit"}>{title}</div>
      <input
        className="w-full rounded-lg indent-2 "
        type={Text}
        placeholder={placeholder}
      ></input>
    </div>
  );
}
