import { useState } from "react";
import { Options } from "..";
import Image from "next/image";
export default function OptionBox(List) {
    const [selectedIndex,setSelectedIndex]=useState(-1);
    const addCorrect=<Image src={'/Resources/Vectors/Correct.png'} alt="Corrct" width={26.5} height={17.5}/>;
  return (
    <div className={"flex flex-1 flex-col gap-10 rounded-lg p-10 bg-slate-300"}>
      {List.List.map((listitem, index) => (
        <Options key={index} text={listitem} ClickFunc={()=>setSelectedIndex(index)} opt={index==selectedIndex?addCorrect:null}/>
      ))}
    </div>
  );
}
