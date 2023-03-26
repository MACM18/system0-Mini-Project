import { Tags } from "..";
export default function TagList(List) {
  return (
    <div className={"flex flex-1 flex-row w-fit h-fit gap-10"}>
      {List.List != undefined &&
          List.List.map((listItem, index) => (
            <Tags key={index} text={listItem} />
          ))}
    </div>
  );
}
