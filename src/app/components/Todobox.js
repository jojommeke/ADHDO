import Checkbox from "./Checkbox.js";

// i know the math.random is a goofy solution
function Todoitem(props) {
  return (
    <div className="align-center flex items-center justify-center">
      <Checkbox
        title="this is the title of a todo"
        id={Math.floor(Math.random() * 100000)}
      />
      <p className="ml-2">todo title goes here</p>
    </div>
  );
}

export default function Todobox(props) {
  return (
    <div className="m-10 rounded-lg bg-black bg-opacity-30 p-5 portrait:rounded-md">
      <div
        id="todobox"
        className="align-center flex h-auto w-auto items-center justify-center text-white"
      >
        <div className="align-center mx-auto w-auto flex-col items-center justify-center">
          <Todoitem />
          <br />
          <Todoitem />
          <br />
          <Todoitem />
        </div>
        <div className="align-center mx-auto w-auto flex-col items-center justify-center">
          <Todoitem />
          <br />
          <Todoitem />
          <br />
          <Todoitem />
        </div>
        <div className="align-center mx-auto w-auto flex-col items-center justify-center">
          <Todoitem />
          <br />
          <Todoitem />
          <br />
          <Todoitem />
        </div>
      </div>
    </div>
  );
}
