import { Button, Label, TextBox, TitleBox } from "@/Components";
import { SideBarUser } from "@/Components/CombindedAdvanced";
import {
  DropDown,
  FoodItem,
  RatingsEditable,
  TagList,
} from "@/Components/CombinedComponents";
import { useState } from "react";
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
  const [serchBoxState, setSearchBoxState] = useState(true);
  return (
    <div
      className={
        "bg-Green2 w-full h-screen rounded-lg flex flex-1 flex-row gap-15"
      }
    >
      <div className={"w-fit h-full"}>
        <SideBarUser />
      </div>
      <div className="bg-white w-full h-full rounded-lg p-15 flex flex-1 flex-col gap-15">
        <TitleBox title={"Reviews"} />
        <div
          className={
            "flex flex-1 flex-row gap-10 p-10 bg-Green3 rounded-lg items-center"
          }
        >
          {serchBoxState && (
            <>
              <DropDown Title={"Date"} />
              <DropDown Title={"Food"} />
              <DropDown Title={"Stars"} />
            </>
          )}
          <TextBox
            title="Search"
            placeholder={"🔍"}
            OnClick={() => {
              setSearchBoxState(false);
            }}
            MouseLeave={() => {
              setSearchBoxState(true);
            }}
          />
          <Button text={"Search"} />
        </div>
        <div className={"w-full h-full overflow-y-scroll"}>
          {FoodItems != undefined &&
            FoodItems.map((item, index) => (
              <div className={"bg-Green3 rounded-lg p-10 m-2"}>
                <div
                  className={
                    "w-full h-fit p-10 bg-white rounded-lg flex flex-initial items-end justify-between gap-10"
                  }
                >
                  <FoodItem Name={item.Name} imageNumber={item.Image} />
                  <Label text={item.Desc} width={"fit"} />
                  <TagList tags={item.tags} width={"fit"} />
                  <div>
                    <RatingsEditable Rating={item.Rating} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
