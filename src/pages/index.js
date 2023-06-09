import Head from "next/head";
import { Inter } from "next/font/google";
import { ContactMenu, NavBox } from "@/Components/CombinedComponents";
import { TitleBox, Label, TextBox, Button } from "@/Components";
import { useState } from "react";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [userName, setUserName] = useState("userName");
  const [password, setPassword] = useState("Password");
  const [state, setState] = useState(false);
  const UserNameFunc = (event) => {
    setUserName(event.target.value);
  };
  const PasswordFunc = (event) => {
    setPassword(event.target.value);
  };
  const router = useRouter();
  const CheckLogin = () => {
    userName == "MACM" && password == "12345678"
      ? setState(true)
      : setState(false);
    state && router.push("/Menu");
  };

  return (
    <>
      <Head>
        <title>Welcome!</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, height=device-height"
        />
        <meta charSet="UTF-8" />
      </Head>
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
              handleInput={UserNameFunc}
            />
            <TextBox
              title="Password"
              placeholder={"your password"}
              type="password"
              handleInput={PasswordFunc}
            />
            <Button text={"Log in"} onClickFun={CheckLogin} />
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
