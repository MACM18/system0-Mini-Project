export default function titleBox({title}){
    return(
        <div className={
            'w-fit h-fit bg-Green3 rounded-md border border-black shadow-inner shadow-black p-15'
        }>
            <h1 className={
                'text-2xl font-extrabold capitalize'
            }>{title}</h1>
        </div>
    )
}