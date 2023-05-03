import { ArrowButton, OptionBox } from "../CombinedComponents";
import { TitleBox, Button } from "..";
import { useState } from "react";
import { useRouter } from "next/router";
export default function SideBarMenu(props) {
  const router = useRouter();
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <div
      className={
        "flex flex-1 flex-col gap-10 bg-white rounded-lg m-2 justify-between p-15"
      }
    >
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
          {/* <TitleBox title={"Time"} />
          <OptionBox
            List={[
              { Text: "Breakfast" },
              { Text: "Lunch" },
              { Text: "Dinner" },
            ]}
            onClickFun={props.onClickFun}
          /> */}
          <Button
            text={"View Orders"}
            onClickFun={() => {
              router.push("./OrderHistoryUser");
            }}
          />
          <Button
            text={"View Cart"}
            onClickFun={() => {
              router.push("./Cart");
            }}
          />
        </div>
      )}

      {menuStatus && (
        <div className="flex flex-1 flex-row self-end justify-between gap-2">
          {/* {localStorage.getItem("Status") == "OK" && (
            <Button text={"Back"} onClickFun={() => router.push("./LogIn")} />
          )} */}

          {localStorage.getItem("Status") != "OK" && (
            <Button text={"Log In"} onClickFun={() => router.push("./LogIn")} />
          )}
        </div>
      )}
    </div>
  );
}
