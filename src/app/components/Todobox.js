import Checkbox from "./Checkbox.js";

// i know the math.random is a goofy solution
function Todoitem(props) {
  return (
    <Checkbox
      title="this is the title of a todo"
      id={Math.floor(Math.random() * 100000)}
    />
  );
}

export default function Todobox(props) {
  return (
    <div className="m-10 rounded-lg bg-black bg-opacity-30 p-5 portrait:rounded-md">
      <div
        id="todobox"
        className="align-center flex h-auto w-auto items-center justify-center text-white"
      >
        <div className="align-center w-auto flex-col items-center justify-center">
          <Todoitem />
          <Todoitem />
          <Todoitem />
        </div>
        <div className="align-center w-auto flex-col items-center justify-center">
          <Todoitem />
          <Todoitem />
          <Todoitem />
        </div>
        <div className="align-center w-auto flex-col items-center justify-center">
          <Todoitem />
          <Todoitem />
          <Todoitem />
        </div>
      </div>
    </div>
  );
}
