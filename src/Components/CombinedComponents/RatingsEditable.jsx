import Image from "next/image";
import { useState } from "react";
export default function RatingsEditable(props) {
  const [rating, setRating] = useState(props.Rating);
  const starFilled = (
    <Image
      src={"/Resources/Vectors/Star Filled.png"}
      width={40}
      height={40}
      alt="Filled Star"
    />
  );
  const starEmpty = (
    <Image
      src={"/Resources/Vectors/Star Empty.png"}
      width={40}
      height={40}
      alt="Empty Star"
    />
  );
  let RatingBox;
  switch (rating) {
    case 1:
      RatingBox = [starFilled, starEmpty, starEmpty, starEmpty, starEmpty];
      break;
    case 2:
      RatingBox = [starFilled, starFilled, starEmpty, starEmpty, starEmpty];
      break;
    case 3:
      RatingBox = [starFilled, starFilled, starFilled, starEmpty, starEmpty];
      break;
    case 4:
      RatingBox = [starFilled, starFilled, starFilled, starFilled, starEmpty];
      break;
    case 5:
      RatingBox = [starFilled, starFilled, starFilled, starFilled, starFilled];
      break;
    default:
      RatingBox = [starEmpty, starEmpty, starEmpty, starEmpty, starEmpty];
      break;
  }
  return (
    <div
      className={"bg-Green3 w-fit flex flex-1 flex-row gap-10 p-15 rounded-lg"}
    >
      {RatingBox.map((Star, index) => (
        <div key={index + 1} onClick={() => setRating(index + 1)}>
          {Star}
        </div>
      ))}
    </div>
  );
}
