import Button from "../Button";
export default function NavBox(Links) {
  return (
    <div
      className={
        "w-fit h-fit p-15 rounded-lg shadow-lg shadow-black flex flex-1 flex-col justify-between gap-15"
      }
    >
      {Links.Links.map((Link,index) => (
        <Button text={Link} key={index} />
      ))}
    </div>
  );
}
