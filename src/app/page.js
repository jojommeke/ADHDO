import React from "react";
import Image from "next/image";
import { Kranky } from "next/font/google";

const kranky = Kranky({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

function Action(props) {
  return (
    <div
      id={props.id}
      alt={props.id}
      className="group mx-2 flex h-12 flex-row justify-center justify-items-center rounded-lg px-6 shadow-md hover:shadow-none hover:invert portrait:w-12 portrait:px-0"
      style={{ background: props.color }}
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

function Divider(props) {
  return (
    <div
      id="line"
      className="mx-auto my-10 h-1 bg-white bg-opacity-20 shadow-md backdrop-blur-md portrait:my-6"
      style={{ width: props.width }}
    />
  );
}

function Headlogo(props) {
  return (
    <div
      id="logodiv"
      className="flex flex-row items-center justify-center justify-items-center self-center pt-7 text-center"
    >
      <p
        id="logo"
        className={` ${kranky.className} normal select-none truncate text-6xl text-white blur-0 drop-shadow-md`}
      >
        {props.headline}
      </p>
    </div>
  );
}

function Todo(props) {
  return (
    <div
      id="todo"
      className="m-auto flex w-[60%] flex-col justify-center justify-items-center rounded-xl border-4 border-white border-opacity-10 bg-black bg-opacity-10 p-10 backdrop-blur-md portrait:w-[95%] portrait:rounded-lg"
    >
      <p className="mx-auto text-center text-4xl font-extrabold text-white portrait:text-2xl">
        {props.name}
      </p>
      <Divider width="100%" />
      <Progress progress={props.progress} color={props.color} />
    </div>
  );
}

function getColor(value) {
  // color algorithm i totally not stole from stack overflow, be honest you would too
  var hue = (value * 120).toString(10); // no idea what this does lmao ;)
  return ["hsl(", hue, ",100%,20%)"].join(""); // changed the values here though so i'd call it original
}

function Progress(props) {
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

export default function site() {
  return (
    <div id="site">
      <Headlogo headline="ADHDO" />
      <Divider width="80vw" />
      <div
        id="actions"
        className="mb-12 flex h-auto w-[100vw] flex-row justify-center justify-self-center overflow-hidden portrait:mb-6"
      >
        <Action icon="add" id="Add" color="#722f37" />
        <Action icon="login" id="Login" color="#4b3f72" />
        <Action icon="credit_card_heart" id="Donate" color="#357266" />
      </div>
      <Todo name="TODO NAME HERE" progress="10%" />
    </div>
  );
}
