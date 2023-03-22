import Label from "./label"
export default function counter({text,amount}){
    return(
        <div className={
            'flex flex-row gap-0 w-fit'
        }>
            <Label className={'shadow-none'} text={text}/>
            <Label className={'shadow-Green1'} text={amount}/>
        </div>
    )
}