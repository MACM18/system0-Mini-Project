import { useState } from "react";

export default function CheckBox(props) {
  const [checked, setChecked] = useState(false);
  setChecked(props.status);
  return (
    <div onClick={props.onClickFun}>
      {checked && <div>✔️</div>}
      <div>{props.Text}</div>
    </div>
  );
}
