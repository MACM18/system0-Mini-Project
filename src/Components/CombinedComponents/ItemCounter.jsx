import { useState } from "react";
import React from "react";
import Button from "../Button";
import TextBox from "../TextBox";

export default function ItemCounter(props) {
  const [amount, setAmount] = useState(0);
  // const [visiblity, setVisisbility] = useState(false);
  const addFun = () => {
    if (amount < 100) {
      setAmount(amount + 1);
      props.onUpdate(amount + 1);
    }
  };
  const subFun = () => {
    if (amount > 0) {
      setAmount(amount - 1);
      props.onUpdate(amount + 1);
    }
  };
  const textBoxChangeAmount = (event) => {
    (event.target.value == NaN) | null
      ? setAmount(0)
      : setAmount(parseInt(event.target.value));
    props.onUpdate(event.target.value);
  };
  return (
    <div
      className={
        "w-48 h-20 flex flex-1 flex-row justify-between gap-15 items-center"
      }
    >
      <Button text={"-"} onClickFun={subFun} />
      <TextBox
        value={amount}
        type="Number"
        handleChange={textBoxChangeAmount}
      />
      <Button text={"+"} onClickFun={addFun} />
    </div>
  );
}
