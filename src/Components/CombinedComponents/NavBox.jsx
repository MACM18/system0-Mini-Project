import Button from "../Button";
import { useRouter } from "next/router";
export default function NavBox(Links) {
  const router = useRouter();
  return (
    <div
      className={
        "w-fit h-fit p-15 bg-white rounded-lg shadow-lg shadow-black flex flex-1 flex-col justify-between gap-15"
      }
    >
      {Links.Links.map((link, index) => (
        <Button
          text={link.Text}
          onClickFun={() => {
            router.push(link.Link);
          }}
          key={index}
        />
      ))}
    </div>
  );
}
