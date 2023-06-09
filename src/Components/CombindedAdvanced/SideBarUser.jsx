import { ArrowButton, OptionBox, ContactMenu } from "../CombinedComponents";
import { TitleBox, Button } from "..";
import { useState } from "react";
export default function SideBarMenu() {
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <div className={"flex flex-1 flex-col gap-10 justify-between p-15"}>
      <div
        className={"flex flex-1 flex-row justify-between gap-15 items-center"}
      >
        <ArrowButton
          onToggle={() =>
            menuStatus == false
              ? setMenuStatus(true)
              : menuStatus == true
              ? setMenuStatus(false)
              : null
          }
        />
        {menuStatus && <TitleBox title={"Menu"} />}
      </div>
      {menuStatus && (
        <div
          className={
            "flex flex-1 flex-col justifybetween gap-10 p-15 bg-Green2 rounded-lg shadow-inner shadow-black"
          }
        >
          <OptionBox
            List={["Order History", "Reviews", "Settings", "Food menu"]}
          />
        </div>
      )}
      {menuStatus && (
        <div className="flex flex-1 flex-row justify-end">
          <Button text={"Log Out"} />
        </div>
      )}
      {menuStatus && <ContactMenu />}
    </div>
  );
}
