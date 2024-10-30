//initialize google font
import { Kranky } from "next/font/google";

const kranky = Kranky({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function Action(props) {
  return (
    <div
      id={props.id}
      alt={props.id}
<<<<<<< HEAD
      className="group mx-2 flex h-12 flex-row justify-center justify-items-center rounded-lg px-6 shadow-md hover:shadow-none portrait:w-12 portrait:px-0"
=======
      className="group mx-2 flex h-12 flex-row justify-center justify-items-center rounded-lg px-6 shadow-md brightness-50 hover:shadow-none hover:brightness-100 group-[:not(:hover)]/actions:brightness-100 portrait:w-12 portrait:px-0"
>>>>>>> 2a137fc0db24a8ccb4e05671f59adb79c1e49da9
      style={{ background: props.color }}
      tabindex="0"
    >
      <span className="material-symbols-outlined m-auto select-none text-center text-white">
        {props.icon}
      </span>
      <div
        id={`${props.id}.divider`}
        className="mx-3 my-auto h-8 w-1 rounded-full bg-white bg-opacity-20 shadow-md backdrop-blur-md group-hover:mx-1 group-hover:w-0 portrait:hidden"
      />
      <a
        className={` ${kranky.className} m-auto mx-2 select-none truncate text-3xl text-white drop-shadow-md group-hover:text-4xl portrait:hidden`}
      >
        {props.id}
      </a>
    </div>
  );
}
