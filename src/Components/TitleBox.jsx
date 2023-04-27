export default function TitleBox({ title }) {
  return (
    <div
      className={
        "w-full h-fit bg-Green3 rounded-xl border-2 border-Green1 shadow-md shadow-black p-4"
      }
    >
      <h1 className={"text-2xl font-extrabold text-center capitalize"}>
        {title}
      </h1>
    </div>
  );
}
