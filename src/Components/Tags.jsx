const Tags = ({ text, ClickFunc }) => {
  return (
    <div className="h-fit bg-Green1 border border-black rounded-full py-1 px-3  w-max text-center font-semibold">
      {text}
    </div>
  );
  onclick = { ClickFunc };
};
export default Tags;
