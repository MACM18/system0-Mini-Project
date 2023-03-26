export default function label({
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
        " h-fit bg-white border border-Green1 rounded-xl px-30 py-15 shadow-md shadow-" +
        shadow
      }
      onClick={handleClick}
    >
      <p className={"text-Green1 text- font-medium"}>{text}</p>
    </div>
  );
}
