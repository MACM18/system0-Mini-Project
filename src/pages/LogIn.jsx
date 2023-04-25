import {
  ContactMenu,
  NavBox,
  AlertLogIn,
} from "@/Components/CombinedComponents";
import { TitleBox, Label, TextBox, Button } from "@/Components";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
const axios = require("axios");
export default function LogIn() {
  const router = useRouter();
  const [userName, setUserName] = useState("userName");
  const [password, setPassword] = useState("Password");
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertInvalid, setAlertInvalid] = useState(false);
  const UserNameFunc = (event) => {
    setUserName(event.target.value);
  };
  const PasswordFunc = (event) => {
    setPassword(event.target.value);
  };
  async function checkData() {
    let data = {
      UserName: userName,
      Password: password,
    };
    console.log(data);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/LogIn/?Method=Find",
      headers: {},
      data: data,
    };

    const response = await axios(config);
    const details = await response.data;
    console.log(details);
    if (
      (details[0] != undefined &&
        details[0] != undefined &&
        details[0].UserName) == userName &&
      details[0].Password == password
    ) {
      localStorage.setItem("CurrentUser", details[0].UserName);
      setAlertSuccess(true);
      setTimeout(() => {
        setAlertSuccess(false);
      }, 1000);
      router.push("./Menu/");
    } else {
      setAlertInvalid(true);
      setTimeout(() => {
        setAlertInvalid(false);
      }, 1000);
    }
  }
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
            {/* <div id="invalid" className="hidden"></div> */}
            {alertSuccess && <AlertLogIn Status="Success" id="success" />}
            {alertInvalid && <AlertLogIn Status="Faild" id="invalid" />}
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
            <Button text={"Log in"} onClickFun={checkData} />
          </div>
        </div>
        <div>
          <NavBox
            Links={[
              { Text: "Menu", Link: "../Menu" },
              { Text: "Register", Link: "../Register" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
