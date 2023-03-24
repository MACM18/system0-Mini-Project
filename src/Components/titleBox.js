export default function titleBox({title}){
    return(
        <div className={
            'w-full h-fit bg-Green3 rounded-xl border border-black shadow-inner shadow-black p-15'
        }>
            <h1 className={
                'text-2xl font-extrabold text-center capitalize'
            }>{title}</h1>
        </div>
    )
}