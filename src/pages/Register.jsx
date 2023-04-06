import { ContactMenu, NavBox } from "@/Components/CombinedComponents";
import { TitleBox, Label, TextBox, Button } from "@/Components";
import { useState } from "react";
import { useRouter } from "next/router";
export default function LogIn() {
  const [userName, setUserName] = useState("userName");
  const [email, setEmail] = useState("userName");
  const [phoneNo, setPhoneNo] = useState("userName");
  const [password, setPassword] = useState("Password");
  const [passwordC, setPasswordC] = useState("Password");
  const [state, setState] = useState(false);
  const Validation = () => {
    userName.length >= 4 && password.length >= 8 && password == passwordC
      ? setState(true)
      : setState(false);
  };
  const router = useRouter();
  const CheckLogin = () => {
    Validation();
    state && router.push("/LogIn");
  };

  return (
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
          className={"bg-Green3 p-15 rounded-lg flex flex-col gap-15 items-end"}
        >
          <TextBox
            title="Email"
            type="email"
            placeholder={"Enter your user name"}
            handleInput={(event) => {
              setEmail(event.target.value);
            }}
          />
          <TextBox
            title="Username"
            placeholder={"Enter your user name"}
            handleInput={(event) => {
              setUserName(event.target.value);
            }}
          />
          <TextBox
            title="Mobile No"
            type="number"
            placeholder={"Enter your user name"}
            handleInput={(event) => {
              setPhoneNo(event.target.value);
            }}
          />
          <TextBox
            title="Password"
            placeholder={"your password"}
            type="password"
            handleInput={(event) => {
              setPassword(event.target.value);
            }}
          />
          <TextBox
            title="Password"
            placeholder={"your password"}
            type="password"
            handleInput={(event) => {
              setPasswordC(event.target.value);
            }}
          />
          <Button text={"Register"} onClickFun={CheckLogin} />
        </div>
      </div>
      <div>
        <NavBox Links={["Menu", "LogIn"]} />
      </div>
    </div>
  );
}
