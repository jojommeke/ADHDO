import React from 'react'
import Image from 'next/image'
import { Kranky } from 'next/font/google'

const kranky = Kranky({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal']
})

function Action(props) {
  return <div id={props.id} alt={props.id} className="
  hover:invert 
  portrait:w-12
  portrait:px-0
  hover:shadow-none
  mx-2
  group
  h-12
  rounded-lg
  flex justify-center
  flex-row
  shadow-md
  justify-items-center
  px-6
  " style={{ 'background': props.color }}>
    <span className="
    material-symbols-outlined 
    text-center
    select-none
    text-white
    m-auto
    ">
      {props.icon}
    </span>
    <div id={`${props.id}.divider`} className="
    portrait:hidden
    h-8
    group-hover:w-0
    group-hover:mx-1
    rounded-full 
    backdrop-blur-md
    bg-white
    bg-opacity-20
    shadow-md
    w-1
    my-auto
    mx-3
    " />
    <a className={`
    ${kranky.className} 
    text-white
    truncate
    m-auto
    mx-2
    select-none
    text-3xl
    drop-shadow-md
    group-hover:text-4xl
    portrait:hidden
    `}>{props.id}</a>
  </div>;
}

function Divider(props) {
  return <div id="line" className="
  backdrop-blur-md
  bg-white
  bg-opacity-20
  shadow-md
  h-1
  mx-auto
  my-10
  portrait:my-6
  " style={{ 'width': props.width }} />;
}

function Headlogo(props) {
  return <div id="logodiv" className="
  flex
  self-center
  items-center
  justify-items-center
  text-center
  pt-7
  flex-row
  justify-center
  " >
    <p id="logo" className={`
      ${kranky.className} 
      blur-0
      truncate
      normal
      text-6xl
      select-none
      text-white
      drop-shadow-md
      `}>{props.headline}</p>
  </div>;
}

function Todo(props) {
  return <div id="todo" className="p-10 
  flex
  flex-col
  w-[60%]
  portrait:w-[95%]
  justify-center
  justify-items-center
  bg-black
  bg-opacity-10
  rounded-xl
  portrait:rounded-lg
  border-opacity-10
  border-4
  border-white
  backdrop-blur-md
  m-auto
  ">
    <p className="
    font-extrabold
    mx-auto
    text-4xl
    text-white
    text-center
    portrait:text-2xl
    ">{props.name}</p>
    <Divider width="100%" />
    <Progress progress={props.progress} color={props.color} />
  </div>;
}

function getColor(value) {
  // color algorithm i totally not stole from stack overflow, be honest you would too
  var hue = ((value) * 120).toString(10); // no idea what this does lmao ;)
  return ["hsl(", hue, ",100%,20%)"].join(""); // changed the values here though so i'd call it original
}

function Progress(props) {
  const progress = props.progress.replace(/%/g, '');
  return <div className="
  text-center
  text-white
  text-3xl
  portrait:text-2xl
  w-full flex
  justify-center
  ">
    <div className="
    border-white
    border-opacity-50
    border-4
    rounded-full
    h-auto
    flex
    justify-left
    text-center
    w-[80%]
    overflow-clip
    "><div className="
    rounded-full
    " style={{ 'width': props.progress, 'background-color': getColor(progress / 100) }} /></div>
    <p className="
    select-none
    text-md portrait:text-sm
    mx-10
    bg-black
    bg-opacity-20
    backdrop-blur-md
    rounded-full
    px-3
    border-opacity-30
    border-4
    border-white
    py-2
    portrait:py-0.5
    truncate
    ">{props.progress}</p>
  </div>;
}

export default function site() {
  return (
    <div id="site">
      <Headlogo headline="ADHDO" />
      <Divider width="80vw" />
      <div id="actions" className="
      mb-12
      portrait:mb-6
      flex
      flex-row
      h-auto
      w-[100vw]
      justify-center
      justify-self-center
      overflow-hidden
      ">
        <Action icon="add" id="Add" color="#722f37" />
        <Action icon="login" id="Login" color="#4b3f72" />
        <Action icon="credit_card_heart" id="Donate" color="#357266" />
      </div>
      <Todo name="TODO NAME HERE" progress="10%" />
    </div>
  );
}
