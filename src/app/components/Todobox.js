function Todoitem(props) {
  return (
    <td>
      <div className="justify-left mx-5 flex items-center">
        <input type="checkbox" className="size-5" />
        <p className="ml-5 text-center group-checked:opacity-0">a todo</p>
      </div>
    </td>
  );
}

export default function Todobox(props) {
  return (
    <div className="m-10 table-auto rounded-lg bg-black bg-opacity-30 p-5 portrait:rounded-md">
      <table
        id="todobox"
        className="m-auto h-auto w-auto table-auto text-white"
      >
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Todoitem />
            <Todoitem />
            <Todoitem />
          </tr>
          <tr>
            <Todoitem />
            <Todoitem />
            <Todoitem />
          </tr>
          <tr>
            <Todoitem />
            <Todoitem />
            <Todoitem />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
