
const tag=({text,ClickFunc})=>{
    return(
        <div className='h-fit bg-green-400 rounded-full py-1 px-3  w-max text-center font-semibold'>{text}</div>
    )
    onclick={ClickFunc}
}
export default tag;