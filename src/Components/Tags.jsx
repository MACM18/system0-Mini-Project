const Tags = ({ text, ClickFunc }) => {
  return (
    <div className="h-fit bg-white border-2 border-Green1 text-Green2 rounded-full py-1 px-3  w-max text-center font-semibold">
      {text}
    </div>
  );
  // onclick = { ClickFunc };
};
export default Tags;
