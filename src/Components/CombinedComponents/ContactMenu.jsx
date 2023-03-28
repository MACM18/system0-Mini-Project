import TitleBox from "../TitleBox";
import Label from "../Label";
import Button from "../Button";
export default function contactMenu(email, phoneNo) {
  return (
    <div
      className={
        "h-fit max-w-72 p-15 rounded-lg bg-Green3 flex flex-initial flex-col justify-between gap-10 items-end"
      }
    >
      <TitleBox title="Contact" />
      <Label text={"Admin"} />
      <Button text={"Email"} link={"mailto:" + email} />
      <Label text={"Canteen"} />
      <Button text={"Tel"} link={"+94" + phoneNo / 10} />
    </div>
  );
}
