export default function textArea({description}){
    return(
        <div className={
            'bg-Green1 rounded-xl w-fit max-w-full min-w-5 h-fit shadow-sm shadow-black p-15'
        }>
            <p className={
                'text-black text-md text-justify font-normal'
            }>{description}</p>
        </div>
    )
}