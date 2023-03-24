import TitleBox from "../titleBox";
import Label from "../label";
import Button from "../button";
export default function contactMenu(email,phoneNo){
    return(
        <div className={
            'w-full h-fit p-15 rounded-lg bg-Green3 flex flex-1 flex-col gap-10 items-end'
        }>
            <TitleBox title='Contact'/>
            <Label text={'Admin'}/>
            <Button text={'Email'} link={'mailto:'+email}/>
            <Label text={'Canteen'}/>
            <Button text={'Tel'} link={'+94'+phoneNo/10}/>
        </div>
    )
    
}