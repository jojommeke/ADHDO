import getColor from "./ColorAlgorithm";

export default function Progress(props) {
  const progress = props.progress.replace(/%/g, "");
  const color = getColor(progress / 100, 1);
  const coloropacity = getColor(progress / 100, 0.75);
  const bg = "linear-gradient(45deg, rgba(9,113,0,1) 0%, " + color + " 60%)";
  return (
    <div className="flex w-full justify-center text-center text-3xl text-white portrait:text-2xl">
      <div className="justify-left flex h-auto w-[80%] overflow-clip rounded-lg bg-white bg-opacity-20 text-center backdrop-blur-lg portrait:rounded-md">
        <div
          className="rounded-r-full shadow-lg"
          style={{
            width: props.progress,
            background: bg,
          }}
        ></div>
      </div>
      <p
        className="text-md ml-10 select-none rounded-lg px-3 py-2 backdrop-blur-md portrait:rounded-md portrait:px-5 portrait:py-0.5 portrait:text-sm"
        style={{ background: color }}
      >
        {props.progress}
      </p>
    </div>
  );
}
