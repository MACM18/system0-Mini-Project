export default function label({ text, width = "full",shadow="black"}) {
  return (
    <div className={"w-"+width+" h-fit bg-white border border-Green1 rounded-xl px-30 py-15 shadow-md shadow-"+shadow}>
      <text className={"text-Green1 text- font-medium"}>{text}</text>
    </div>
  );
}
