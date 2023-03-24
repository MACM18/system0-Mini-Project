import Link from 'next/link'
export default function button({text,link='/aaa'}){
    return(
        <Link href={link}><div className={'p-15 border group border-white rounded-lg bg-Green1 w-fit h-fit shadow-lg shadow-black visited:shadow-sm hover:border-Green1 hover:bg-white hover:cursor-pointer'}>
            <text className={'text-lg text-white font-extrabold text-center group-hover:text-Green1'}
            >{text}</text>
        </div></Link>
    )
}