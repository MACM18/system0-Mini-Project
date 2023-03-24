export default function rating({ value = 0 }) {
  return (
    <div
      className={
        "w-full rounded-full bg-white border border-black h-auto flex flex-1 flex-row justify-around p-1"
      }
    >
      <img src="..public/star.png" className={"w-5 h-5"}></img>
      <div>{value}</div>
    </div>
  );
}
