export default function TextArea({ description }) {
  return (
    <div
      className={
        "bg-Green1 rounded-xl w-full max-w-full min-w-5 h-fit shadow-sm shadow-black p-15"
      }
    >
      <textArea
        className={
          "text-black text-md text-justify font-normal w-full h-full rounded-lg indent-2"
        }
        placeholder={description}
      ></textArea>
    </div>
  );
}
