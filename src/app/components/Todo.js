//import components used here
import Divider from "./Divider";
import Progress from "./Progress";
import Todobox from "./Todobox";

export default function Todo(props) {
  return (
    <div
      id="todo"
      className="m-auto flex w-[80%] flex-col justify-center justify-items-center rounded-xl border-4 border-white border-opacity-10 bg-black bg-opacity-10 p-10 backdrop-blur-md portrait:w-[95%] portrait:rounded-lg portrait:p-5"
    >
      <p className="mx-auto text-center text-4xl font-extrabold text-white portrait:text-2xl">
        {props.name}
      </p>
      <Divider width="100%" />
      <Progress progress={props.progress} color={props.color} />
      <Todobox />
    </div>
  );
}
