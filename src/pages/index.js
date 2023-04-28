import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Menu from "./Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
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
      <div className="max-w-screen h-auto min-h-screen bg-gradient-to-b from-purple-300 via-purple-500 to-blue-700  flex flex-1 flex-col justify-center gap-5">
        <header className="flex flex-1 max-w-fill max-h-fit m-2 p-2 rounded-md grow-0 flex-row justify-between opacity-80 items-start bg-blue-50 text-blue-700">
          <div className="flex flex-col items-center gap-5 bg-blue-400 p-2 rounded-md text-white font-extrabold text-xl">
            <div className="p-2 bg-slate-300 rounded-md">
              <Image
                src="/Resources/MAIN.jpeg"
                width="100"
                height="100"
                className="rounded-md "
              ></Image>
            </div>
            <div>Food Order</div>
          </div>
          <navigator>
            <div
              onClick={() => router.push("./")}
              className="flex p-2 flex-1 flex-row gap-10 bg-slate-300 rounded-md"
            >
              <div
                className="p-2 px-6 cursor-pointer rounded-lg shadow-md shadow-purple-400 border-2 border-purple-500 hover:bg-blue-700 hover:text-white hover:shadow-none bg-blue-300 text-lg font-semibold text-blue-900"
                onClick={() => router.push("./")}
              >
                Home
              </div>
              {/* <div className="p-2 px-6 cursor-pointer rounded-lg shadow-md shadow-purple-400 border-2 border-purple-500 hover:bg-blue-700 hover:text-white hover:shadow-none bg-blue-300 text-lg font-semibold text-blue-900">
                Contact
              </div>
              <div className="p-2 px-6 cursor-pointer rounded-lg shadow-md shadow-purple-400 border-2 border-purple-500 hover:bg-blue-700 hover:text-white hover:shadow-none bg-blue-300 text-lg font-semibold text-blue-900">
                More
              </div> */}
              <div
                onClick={() => router.push("./LogIn")}
                className="p-2 px-6 cursor-pointer rounded-lg shadow-md shadow-purple-400 border-2 border-purple-500 hover:bg-purple-700 hover:text-white hover:border-blue-500 hover:shadow-none bg-blue-300 text-lg font-semibold text-blue-900"
              >
                Log In
              </div>
            </div>
          </navigator>
        </header>
        <div className="max-w-full h-fit bg-blue-100 opacity-70 m-1 p-2 rounded-md flex grow flex-col justify-betwen items-start">
          <div className="w-full h-fit  p-4 flex flex-1 flex-col items-center justify-center gap-10">
            <div className="w-1/2 text-center bg-blue-200 p-4 text-lg font-bold rounded-md border-2 border-purple-700">
              Food ordering system for the Canteen
            </div>
            <div className="w-1/2 text-center bg-blue-200 p-4 rounded-md border-2  border-purple-700">
              A web application which is still being developed and has some core
              functionalities. This system will allow anyone to self register
              with their details and make their orders online
            </div>
          </div>
          <div
            onClick={() => router.push("./Menu")}
            className="self-end p-4 border border-blue-500 cursor-pointer hover:bg-white rounded-md hover:rounded-sm"
          >
            👇 View Menu
          </div>
        </div>
        <div>{/* <Menu /> */}</div>
      </div>
    </>
  );
}
