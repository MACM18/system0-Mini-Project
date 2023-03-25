import Head from "next/head";
import { Inter } from "next/font/google";
import TextBox from "../Components/TextBox";
import FoodItemWithClose from "../Components/CombinedComponents/FoodItemWithClose";
import ItemCounter from "@/Components/CombinedComponents/ItemCounter";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <ItemCounter />
      <FoodItemWithClose Name={"AAAA"} />
      <TextBox title="MACM" />
    </>
  );
}
