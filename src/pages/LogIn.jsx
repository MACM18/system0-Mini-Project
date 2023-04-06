import { ContactMenu, NavBox } from "@/Components/CombinedComponents";
import { TitleBox, Label, TextBox, Button } from "@/Components";
import { useState } from "react";
import Head from "next/head";
export default function LogIn() {
  const [userName, setUserName] = useState("userName");
  const [password, setPassword] = useState("Password");
  const UserNameFunc = (event) => {
    setUserName(event.target.value);
  };
  const PasswordFunc = (event) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, height=device-height"
        />
        <meta charSet="UTF-8" />
      </Head>
      <div
        className={
          "bg-Green2 w-screen h-screen flex flex-auto flex-row gap-15 p-15"
        }
      >
        <div
          className={
            "bg-white w-1/4 h-full rounded-lg flex flex-col justify-end p-10"
          }
        >
          <ContactMenu email={"123@abc.lk"} phoneNo={"0123456789"} />
        </div>
        <div
          className={
            "bg-white w-full h-full rounded-lg p-10 flex flex-col gap-30"
          }
        >
          <TitleBox title={"Canteen Food ordering"} />
          <Label text={"Log in"} />
          <div
            className={
              "bg-Green3 p-15 rounded-lg flex flex-col gap-15 items-end"
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
        </div>
        <div>
          <NavBox Links={["Menu", "Register"]} />
        </div>
      </div>
    </>
  );
}
