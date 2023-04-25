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
  OrderSummary,
  Cart,
} from "@/Components/CombindedAdvanced";
import ItemOrganizer from "@/Components/CombindedAdvanced/ItemOrganizer";
import { render } from "react-dom";
// import Cart from "@/Components/CombindedAdvanced";
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
  const carts = {
    UserName: "User1",
    Status: "Pending",
    Items: [
      {
        Name: "Rice & Curry",
        Amount: 5,
        Price: 750,
      },
      {
        Name: "Rice & Curry",
        Amount: 5,
        Price: 750,
      },
      {
        Name: "Rice & Curry",
        Amount: 5,
        Price: 750,
      },
    ],
    _id: "6447d4dad326701acbc0b019",
    __v: 0,
  };
  console.log(localStorage.getItem("CartID"));
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
      <OrderSummary
        TotalAmount={100}
        Canceled={10}
        Completed={50}
        Remaining={20}
        Abandoned={15}
      />
      <Cart
        Carts={carts}
        ID={typeof window !== "undefined" && localStorage.getItem("CartID")}
      />
    </>
  );
}
