export default function TextArea(props) {
  return (
    <div
      className={
        "bg-Green1 rounded-xl w-full max-w-full min-w-5 h-fit shadow-sm shadow-black p-1.5 flex justify-center"
      }
    >
      <textarea
        className={
          "text-black text-md text-justify font-normal w-full h-full rounded-lg indent-2"
        }
        onChange={props.handleChange}
        value={props.description}
      ></textarea>
    </div>
  );
}
