//use states
import { useState } from "react";

export default function options({list}){
        const[selected,setSelected]=useState(false);
    
    function handleClick(){
        defaultOne=id;
        condition();
        console.log('handleClick');
    }
    function condition(){
        id==defaultOne ? setclassNameSpan('w-7 h-7 rounded-md bg-Green1'):setclassNameSpan('invisible w-7 h-7 rounded-md bg-Green1');
        console.log('condition');
    }
    // let selection='';
    // id==defaultOne ? selection='':'invisible';
    // console.log(selection+id+defaultOne);
    // let classNameSpan= selection+'w-7 h-7 rounded-md bg-Green1';
    return (
        <div className={
            'bg-Green1 group rounded-lg shadow-inner shadow-black p-15 flex flex-1 flex-row gap-15 w-auto h-auto items-center'
        }>
            <div className={
                'h-10 w-10 border border-black cursor-pointer rounded-lg bg-white flex flex-initial flex-row justify-around items-center'
            }>
                <div className={classNameSpan} onClick={handleClick}/>
            </div>
            <span className={
                'text-left font-medium text-black w-full h-full indent-1 bg-transparent'
            }>{text}</span>
        </div>
    )
}