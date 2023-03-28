import { useState } from "react";
import { Button } from "..";
import Image from "next/image";
export default function ArrowButton(props) {
  const [ArrowDirection, setArrowDirection] = useState("Right");
  let imagePath = "/Resources/Vectors/" + ArrowDirection + " Arrow.png";
  const handleClick = () => {
    ArrowDirection == "Left"
      ? setArrowDirection("Right")
      : ArrowDirection == "Right"
      ? setArrowDirection("Left")
      : null;
      props.onToggle();
  };
  return (
    <Button
      text={<Image src={imagePath} width={36.95} height={36} alt="Arrow" />}
      onClickFun={handleClick}
    />
  );
}
