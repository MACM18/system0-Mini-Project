import { Button, TextBox, TitleBox } from "@/Components";
import { SideBarAdmin } from "@/Components/CombindedAdvanced";
import AdminFooditemVarients from "@/Components/CombinedComponents/AdminFooditemVarients";
import Head from "next/head";

export default function AdminFoodItems(props) {
  const FoodItems = [
    { Name: "Name1", Image: 1, Desc: "aaaaaa", Rating: 2 },
    { Name: "Name2", Image: 2, Desc: "aaaaaab", Rating: 5 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
    { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  ];
  return (
    <div className={" h-screen bg-Green2 flex flex-auto flex-row gap-15"}>
      <Head>
        <title>Food Itmes</title>
      </Head>
      <div className={"w-fit h-full"}>
        <SideBarAdmin />
      </div>
      <div className={"bg-white rounded-lg w-full p-10 flex flex-auto flex-col gap-10"}>
        <TitleBox title={"Food Items"} />
        <div className={"flex flex-auto flex-row gap-10 items-center"}>
          <TextBox title="Search" placeholder={"🔍"} />
          <Button text={"Search"} />
        </div>
        <div className={"bg-Green3 p-15 rounded-lg flex flex-wrap flex-row justify-left gap-30"}>
          {FoodItems != undefined &&
            FoodItems.map((item, index) => (
              <AdminFooditemVarients
                key={index}
                Name={item.Name}
                Image={item.Image}
                desc={item.Desc}
                Rating={item.Rating}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
