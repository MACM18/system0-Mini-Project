import { Tags } from "..";
export default function TagList(props) {
  return (
    <div className={"flex flex-1 flex-row w-fit h-fit gap-10"}>
      {props.tags != undefined &&
        props.tags.map((listItem, index) => (
          <Tags key={index} text={listItem} />
        ))}
      {/* <div
        className="h-fit  bg-Green1 border border-black rounded-full py-1 px-2.5 cursor-pointer  w-max text-center font-semibold"
        onClick={props.onClickFunc}
      >
        +
      </div> */}
    </div>
  );
}
