import Head from "next/head";
import { Inter } from "next/font/google";
import FoodItem4 from "@/Components/foodItem4";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <FoodItem4 Name={"aaaa"} />
    </>
  );
}
