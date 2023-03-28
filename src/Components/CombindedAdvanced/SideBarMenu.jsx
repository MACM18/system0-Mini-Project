import { ArrowButton, OptionBox } from "../CombinedComponents";
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
        <div className={'flex flex-1 flex-col justifybetween gap-10 p-15 bg-Green2 rounded-lg shadow-inner shadow-black'}>
          <TitleBox title={"Time"} />
          <OptionBox List={[1, 2, 3]} />
        </div>
      )}
      {menuStatus && (
        <div className={'flex flex-1 flex-col justifybetween gap-10 p-15 bg-Green2 rounded-lg shadow-inner shadow-black'}>
          <TitleBox title={"Type"} />
          <OptionBox List={[1, 2, 3, 4]} />
        </div>
      )}
      {menuStatus && (
        <div className="flex flex-1 flex-row justify-between">
          <Button text={"View Orders"} />
          <Button text={"View Cart"} />
        </div>
      )}
    </div>
  );
}
