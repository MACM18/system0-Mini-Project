export default function label({text}){
    return(
        <div className={
            'w-full h-fit bg-white border border-Green1 rounded-xl px-30 py-15 shadow-md shadow-black'
        }>
            <text className={
                'text-Green1 text- font-medium'
            }>{text}</text>
        </div>
    )
}