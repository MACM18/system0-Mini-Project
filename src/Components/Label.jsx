export default function Label({
  text,
  width = "full",
  shadow = "black",
  handleClick,
}) {
  return (
    <div
      className={
        "w-" +
        width +
        " h-fit bg-white border border-Green1 rounded-xl px-10 py-5 shadow-md shadow-" +
        shadow
      }
      onClick={handleClick}
    >
      <p className={"text-Green1 text- font-medium"}>{text}</p>
    </div>
  );
}
