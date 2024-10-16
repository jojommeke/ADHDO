export default function Todobox(props) {
  return (
    <div className="m-10 table-auto rounded-lg bg-black bg-opacity-30 p-5 portrait:rounded-md">
      <table id="todobox" class="h-full w-full table-auto text-white">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="justify-left flex items-center gap-3">
                <input type="checkbox" className="size-5" />
                <p className="group-checked:opacity-0">a todo</p>
              </div>
            </td>
            <td>
              <div className="justify-left flex items-center gap-3">
                <input type="checkbox" className="size-5" />
                <p className="group-checked:opacity-0">a todo</p>
              </div>
            </td>
            <td>
              <div className="justify-left flex items-center gap-3">
                <input type="checkbox" className="size-5" />
                <p className="group-checked:opacity-0">a todo</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="justify-left flex items-center gap-3">
                <input type="checkbox" className="size-5" />
                <p className="group-checked:opacity-0">a todo</p>
              </div>
            </td>
            <td>
              <div className="justify-left flex items-center gap-3">
                <input type="checkbox" className="size-5" />
                <p className="group-checked:opacity-0">a todo</p>
              </div>
            </td>
            <td>
              <div className="justify-left flex items-center gap-3">
                <input type="checkbox" className="size-5" />
                <p className="group-checked:opacity-0">a todo</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="justify-left flex items-center gap-3">
                <input type="checkbox" className="size-5" />
                <p className="group-checked:opacity-0">a todo</p>
              </div>
            </td>
            <td>
              <div className="justify-left flex items-center gap-3">
                <input type="checkbox" className="size-5" />
                <p className="group-checked:opacity-0">a todo</p>
              </div>
            </td>
            <td>
              <div className="justify-left flex items-center gap-3">
                <input type="checkbox" className="size-5" />
                <p className="group-checked:opacity-0">a todo</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
