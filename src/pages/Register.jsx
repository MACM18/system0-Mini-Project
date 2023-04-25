import { ContactMenu, NavBox, Alert } from "@/Components/CombinedComponents";
import { TitleBox, Label, TextBox, Button } from "@/Components";
import { useState } from "react";
import { useRouter } from "next/router";
const axios = require("axios");
export default function LogIn() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");
  const [state, setState] = useState(false);
  const [visibilityAlert, setVisibilityAlert] = useState(false);
  const [message, setMessage] = useState("");
  // let messageAlert;
  const Validation = () => {
    userName.length >= 4 && password.length >= 8 && password == passwordC
      ? setState(true)
      : setState(false);
    if (password != passwordC) {
      setMessage("conform password does not match");
      setVisibilityAlert(true);
      setTimeout(() => {
        setVisibilityAlert(false);
      }, 1000);
    }
    if (userName.length < 4 && password.length < 8) {
      setMessage("Not enough length");
      setVisibilityAlert(true);
      setTimeout(() => {
        setVisibilityAlert(false);
      }, 1000);
    }
  };
  const router = useRouter();
  const CheckLogin = async () => {
    let data = {
      Name: userName,
      Type: "Normal",
      Password: password,
      Email: email,
      UserName: userName,
      PhoneNo: phoneNo,
    };
    let data2 = {
      Password: password,
      UserName: userName,
    };
    let data3 = {
      UserName: userName,
    };
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/User/?Method=Insert",
      headers: {},
      data: data,
    };
    let config2 = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/LogIn/?Method=Insert",
      headers: {},
      data: data2,
    };
    let config3 = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/LogIn/?Method=Find",
      headers: {},
      data: data3,
    };
    try {
      const response3 = await axios(config3);

      const loginCheck = await response3.data;
      // console.log(loginCheck);
      // console.log(data3);
      if (loginCheck.length == 0) {
        Validation();
        if (state) {
          const response = await axios(config);
          const response2 = await axios(config2);
          const loginFinal = await response2.data;
          const users = await response.data;
          console.log(users);
          console.log(loginFinal);
          setMessage("User Created");
          setVisibilityAlert(true);
          setTimeout(() => {
            setVisibilityAlert(false);
          }, 1000);
          // console.log("User Created");
          setState(false);
          router.push("/LogIn");
        }
      } else {
        setMessage("User Already Exists");
        setVisibilityAlert(true);
        setTimeout(() => {
          setVisibilityAlert(false);
        }, 1000);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div
      className={
        "bg-Green2 w-screen h-screen flex flex-auto flex-row gap-15 p-15"
      }
    >
      {visibilityAlert && <Alert Text={message} />}
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
        <NavBox
          Links={[
            { Text: "Menu", Link: "../Menu" },
            { Text: "LogIn", Link: "../LogIn" },
          ]}
        />
      </div>
    </div>
  );
}
