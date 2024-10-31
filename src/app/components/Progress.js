import getColor from "./ColorAlgorithm";

export default function Progress(props) {
  const progress = props.progress.replace(/%/g, "");
  const color = getColor(progress / 100, 1);
  const coloropacity = getColor(progress / 100, 0.75);
  const bg = "linear-gradient(45deg, rgba(9,113,0,1) 0%, " + color + " 60%)";
  return (
    <div className="flex w-full justify-center text-center text-3xl text-white portrait:flex-col portrait:text-2xl">
      <div className="justify-left flex overflow-clip rounded-lg bg-white bg-opacity-20 text-center backdrop-blur-lg portrait:mx-auto portrait:h-6 portrait:w-full portrait:rounded-md landscape:w-[80%]">
        <div
          className="rounded-r-full shadow-lg"
          style={{
            width: props.progress,
            background: bg,
          }}
        ></div>
      </div>
      <a
        className="text-md w-[15%] select-none rounded-lg px-3 py-2 font-bold backdrop-blur-md portrait:mx-auto portrait:mt-5 portrait:w-[30%] portrait:rounded-md portrait:px-5 portrait:py-0.5 portrait:text-base landscape:ml-auto"
        style={{ background: color }}
      >
        {props.progress}
      </a>
    </div>
  );
}
