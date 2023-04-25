import { Button, Label, TextBox, TitleBox } from "@/Components";
import { SideBarUser } from "@/Components/CombindedAdvanced";
import { DropDown, TagList } from "@/Components/CombinedComponents";
import { useState } from "react";
export default function Menu(props) {
  // const FoodItems = [
  //   { Name: "Name1", Image: 1, Desc: "aaaaaa", Rating: 2 },
  //   { Name: "Name2", Image: 2, Desc: "aaaaaab", Rating: 5 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  //   { Name: "Name3", Image: 3, Desc: "aaaaaabb", Rating: 1 },
  // ];
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
        <TitleBox title={"Order History"} />
        <div
          className={"flex flex-1 flex-row gap-10 p-10 bg-Green3 rounded-lg"}
        >
          {serchBoxState && (
            <>
              <DropDown Title={"Date"} />
              <DropDown Title={"Status"} />
              <DropDown Title={"Food"} />
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
        <div className={"w-full h-full"}>
          {props.Orders != undefined &&
            props.Orders.map((order) => (
              <div className={"w-full h-fit p-10 bg-white rounded-lg"}>
                <Label text={order.Date} width={"fit"} />
                <Label text={order.Status} />
                {/* <TagList tags={order.tags} width={"fit"} /> */}
                <Label text={order.Amount} width={"fit"} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
const axios = require("axios");
let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://localhost:3000/api/Orders/?Method=Find",
  headers: {},
  data: { UserName: typeof window !== 'undefined'&& localStorage.getItem("CurrentUser") },
};
export const getStaticProps = async () => {
  try {
    const response = await axios(config);
    const Orders = await response.data;
    return { props: { Orders } };
  } catch (err) {
    console.error(err.message);
    return { props: { Orders: [] } };
  }
};
