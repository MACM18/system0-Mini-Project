import Head from "next/head";
import { Inter } from "next/font/google";
import {
  AlertItemAdded,
  AlertOrderPlaced,
  ContactMenu,
  NavBox,
  OrderConfirmation,
} from "@/Components/CombinedComponents";
import { TitleBox, Label, TextBox, Button } from "@/Components";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  OrderConfirmationPage,
  OrderDetails,
} from "@/Components/CombindedAdvanced";
import ItemOrganizer from "@/Components/CombindedAdvanced/ItemOrganizer";
import { render } from "react-dom";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [userName, setUserName] = useState("userName");
  const [password, setPassword] = useState("Password");
  const [visibility, setVisibility] = useState(false);
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
        onClick={() => {
          setVisibility(true);
          setTimeout(() => {
            setVisibility(false);
          }, 2500);
        }}
      >
        aaaaa
        {visibility && <AlertItemAdded Name="aaa" />}
      </div>
      <OrderConfirmationPage
        order={[
          { Name: "Food1", Image: "abc", Amount: 2, Price: 200 },
          { Name: "Food2", Image: "abcd", Amount: 2, Price: 300 },
          { Name: "Food3", Image: "abcde", Amount: 1, Price: 50 },
        ]}
        ID={"1000"}
        Date={"01.01.2023"}
        Name={"MACM"}
        tags={[1, 2, 3, 4]}
        Total={550}
      />
    </>
  );
}
