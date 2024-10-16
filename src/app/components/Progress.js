import getColor from "./ColorAlgorithm";

export default function Progress(props) {
  const progress = props.progress.replace(/%/g, "");
  return (
    <div className="flex w-full justify-center text-center text-3xl text-white portrait:text-2xl">
      <div className="justify-left flex h-auto w-[80%] overflow-clip rounded-full border-4 border-white border-opacity-50 text-center">
        <div
          className="rounded-full"
          style={{
            width: props.progress,
            "background-color": getColor(progress / 100),
          }}
        />
      </div>
      <p className="text-md mx-10 select-none truncate rounded-full border-4 border-white border-opacity-30 bg-black bg-opacity-20 px-3 py-2 backdrop-blur-md portrait:py-0.5 portrait:text-sm">
        {props.progress}
      </p>
    </div>
  );
}
