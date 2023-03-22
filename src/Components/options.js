export default function options({text,id,defaultOne=-1}){
    let selection='invivible';
    id==defaultOne ? selection='visible':'invisible';
    return (
        <div className={
            'bg-Green1 rounded-lg shadow-inner shadow-black p-15 flex flex-1 flex-row gap-15 w-auto h-auto'
        }>
            <span className={
                'h-10 w-10 border border-black rounded-lg bg-white flex flex-initial flex-row content-center items-center'
            }>
                <span className='{selection} w-3 h-3 bg-Green1'></span>
            </span>
            <span className={
                'text-left font-medium text-black w-auto h-auto p-15 bg-transparent'
            }>{text}</span>
        </div>
    )
}