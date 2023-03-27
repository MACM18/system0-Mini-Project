import { Tags } from "..";
export default function TagList(props) {
  return (
    <div className={"flex flex-1 flex-row w-fit h-fit gap-10"}>
      {props.tags != undefined &&
        props.tags.map((listItem, index) => (
          <Tags key={index} text={listItem} />
        ))}
    </div>
  );
}
