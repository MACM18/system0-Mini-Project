import Head from "next/head";
import { Inter } from "next/font/google";
import {
  ArrowButton,
  OptionBox,
  FoodItem4,
  DropDown,
  Ratings,
  TagList,
} from "@/Components/CombinedComponents";
import { Options } from "@/Components";
import {
  AddToCartNormal,
  AddToCartWithCurry,
  SideBarMenu,
  SideBarAdmin,
  SideBarUser,
} from "@/Components/CombindedAdvanced";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <SideBarUser />
    </>
  );
}
