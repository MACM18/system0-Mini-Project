// Need to be modfied the onClick function and text allignment
export default function TextBox({
  title = "",
  placeholder,
  value,
  type = "Text",
  handleChange,
  handleInput,
  OnClick,
  MouseLeave,
}) {
  return (
    <div
      className={
        "bg-Green1 w-full rounded-lg p-10 flex flex-auto flex-row justify-between gap-5 shadow-inner shadow-black"
      }
    >
      {title != "" ? (
        <div className={"font-light w-fit h-full"}>{title}</div>
      ) : null}
      <input
        className="w-full h-full rounded-lg indent-2 "
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onInput={handleInput}
        onClick={OnClick}
        onMouseLeave={MouseLeave}
      ></input>
    </div>
  );
}
