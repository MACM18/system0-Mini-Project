import TitleBox from "../TitleBox";
import Label from "../Label";
import Button from "../Button";
import Link from "next/link";
export default function contactMenu(email, phoneNo) {
  return (
    <div
      className={
        "h-fit max-w-full p-10 rounded-lg bg-Green3 flex flex-initial flex-col justify-between gap-5 items-end"
      }
    >
      <TitleBox title="Contact" />
      <Label text={"Admin"} />
      <Link href="mailto:admn@a.com">
        <Button text={"Email"} />
      </Link>

      <Label text={"Canteen"} />
      <Button text={"Telephone"} link={"+94" + phoneNo / 10} />
    </div>
  );
}
