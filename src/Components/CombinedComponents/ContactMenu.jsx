import TitleBox from "../TitleBox";
import Label from "../Label";
import Button from "../Button";
import Link from "next/link";
import { useState } from "react";
export default function contactMenu(email, phoneNo) {
  const [emailVisibility, setEmailVisibility] = useState(false);
  const [phoneVisibility, setPhoneVisibility] = useState(false);
  return (
    <div
      className={
        "h-fit max-w-full p-10 rounded-lg bg-Green3 flex flex-initial flex-col justify-between gap-5 items-end"
      }
    >
      <TitleBox title="Contact" />
      <Label text={"Admin"} />
      <Link href="mailto:admn@a.com">
        {!emailVisibility && (
          <Button
            text={"Email"}
            onClickFun={() => {
              setEmailVisibility(true);
            }}
          />
        )}
        {emailVisibility && (
          <Label
            text={"admn@a.com"}
            handleClick={() => {
              setEmailVisibility(false);
            }}
          />
        )}
      </Link>

      <Label text={"Canteen"} />
      {!phoneVisibility && (
        <Button
          text={"Telephone"}
          link={"+94" + phoneNo / 10}
          onClickFun={() => {
            setPhoneVisibility(true);
          }}
        />
      )}
      {phoneVisibility && (
        <Label
          text={"+9400000"}
          handleClick={() => {
            setPhoneVisibility(false);
          }}
        />
      )}
    </div>
  );
}
