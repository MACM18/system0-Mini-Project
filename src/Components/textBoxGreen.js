// Need to be modfied the onClick function and text allignment

export default function textBoxGreen({title,placeholder,width='w-full'}){
let textWidth='w-fit', visibility='visible';
const classNamesDiv ='h-16 p-15 group rounded-lg bg-Green1 shadow-inner shadow-black  flex flex-1 flex-row gap-15 justify-between'+width;
let classNamesText = textWidth+' '+visibility+' '+'h-full text-left text-black font-light ';
let classNamesInput = 'w-full h-full bg-white shadow-sm rounded-lg indent-4';
const expandTextBox=() =>{
    textWidth='w-0';
    visibility='invisible';
} 
    return(
        <div className={classNamesDiv}>
            <div className={
                {classNamesText}
            }>{title}</div>
            <input type='text' placeholder={placeholder} onClick={expandTextBox()} className={classNamesInput}>
            </input>
        </div>
    )
}