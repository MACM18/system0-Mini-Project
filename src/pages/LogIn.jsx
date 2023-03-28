import { ContactMenu, NavBox } from "@/Components/CombinedComponents";
import { TitleBox, Label, TextBox, Button } from "@/Components";
import { useState } from "react";
export default function LogIn() {
  const [userName, setUserName] = useState("userName");
  const [password, setPassword] = useState("Password");
  const UserNameFunc = (event) => {
    setUserName(event.target.value);
  };
  const PasswordFunc = (event) => {
    setUserName(event.target.value);
  };
  return (
    <>
      <div
        className={
          "bg-Green2 rounded-lg p-30 flex flex-1 flex-row justify-center gap-30 w-screen h-screen"
        }
      >
        <div
          className={
            "bg-white grow-0 h-full rounded-lg p-15 flex flex-1 flex-col justify-end"
          }
        >
          <ContactMenu email={"123@abc.lk"} phoneNo={"0123456789"} />
        </div>
        <div
          className={
            "w-full h-full bg-white rounded-lg p-15 flex flex-1 flex-col gap-30"
          }
        >
          <TitleBox title={"Canteen Food ordering"} />
          <Label text={"Log in"} />

          <div
            className={
              "w-full h-fit p-30 bg-Green3 rounded-lg flex flex-initial flex-col gap-30 items-end"
            }
          >
            <TextBox
              title="Username"
              placeholder={"Enter your user name"}
              handleChange={UserNameFunc}
            />
            <TextBox
              title="Password"
              placeholder={"your password"}
              type="password"
              handleChange={PasswordFunc}
            />
            <Button text={"Log in"} />
          </div>
          <div></div>
        </div>
        <div className={"w-fit h-full "}>
          <NavBox Links={["Menu", "Register"]} />
        </div>
      </div>
    </>
  );
}
