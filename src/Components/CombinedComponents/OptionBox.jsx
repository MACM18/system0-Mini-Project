import { useState } from "react";
import { Options } from "..";
import { useRouter } from "next/router";
import Image from "next/image";
export default function OptionBox(List) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();
  const addCorrect = (
    <Image
      src={"/Resources/Vectors/Correct.png"}
      alt="Corrct"
      width={26.5}
      height={17.5}
    />
  );
  return (
    <div className={"flex flex-1 flex-col gap-10 rounded-lg p-10 bg-slate-300"}>
      {List.List.map((listitem, index) => (
        <Options
          key={index}
          text={listitem.Text}
          ClickFunc={() => {
            setSelectedIndex(index);
            router.push(listitem.Link);
          }}
          opt={index == selectedIndex ? addCorrect : null}
        />
      ))}
    </div>
  );
}
