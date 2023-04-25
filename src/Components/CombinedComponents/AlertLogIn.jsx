import Label from "../Label";

export default function AlertLogIn(props) {
  if (props.Status == "Success")
    return (
      <div
        className={
          "w-fit h-fit p-15 bg-Green3 backdrop-blur-md shadow-lg shadow-Green3 gap-15 absolute right-4 top-4 rounded-lg flex flex-auto flex-row"
        }
      >
        <Label text={"Log In Successful!"} />
      </div>
    );
  else
    return (
      <div
        className={
          "w-fit h-fit p-15 bg-Green3 backdrop-blur-md shadow-lg shadow-Green3 gap-15 absolute right-4 top-4 rounded-lg flex flex-auto flex-row"
        }
      >
        <Label text={"Invalid Username or Password"} />
      </div>
    );
}
