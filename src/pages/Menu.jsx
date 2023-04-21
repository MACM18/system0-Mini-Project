import { SideBarMenu } from "@/Components/CombindedAdvanced";
import { FoodItemCombined } from "@/Components/CombinedComponents";
export default function Menu(props) {
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
    <div
      className={
        "bg-Green2 w-full h-screen rounded-lg flex flex-1 flex-row gap-15"
      }
    >
      <div className={"w-fit h-full"}>
        <SideBarMenu />
      </div>
      <div
        className={
          "flex flex-1 flex-row flex-wrap place-items-center gap-x-15 bg-Green3 rounded-lg justify-around gap-y-15 w-full h-full "
        }
      >
        {FoodItems != undefined &&
          FoodItems.map((item, index) => (
            <FoodItemCombined
              key={index}
              Name={item.Name}
              imageNumber={item.Image}
              desc={item.Desc}
              Rating={item.Rating}
            />
          ))}
      </div>
    </div>
  );
}
