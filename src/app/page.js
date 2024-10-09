import React from 'react'
import Image from 'next/image'
import { Kranky } from 'next/font/google'

const kranky = Kranky({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal']
})

function Action(props) {
  return <div id={props.id} alt={props.id} className={"hover:invert  hover:shadow-none mx-2 group h-12 rounded-lg flex justify-center flex-row shadow-md justify-content-center justify-items-center px-6"} style={{ 'background': props.color }}>
    <span className="material-symbols-outlined text-center select-none text-white m-auto">
      {props.icon}
    </span>
    <div id={`${props.id}.divider`} className="h-8 group-hover:w-0 group-hover:mx-1 rounded-full backdrop-blur-md bg-white bg-opacity-20 shadow-md w-1 my-auto mx-3" />
    <a className={`${kranky.className} text-white truncate m-auto mx-2 select-none text-3xl drop-shadow-md group-hover:text-4xl`}>{props.id}</a>
  </div>;
}

function Divider(props) {
  return <div id="line" className="w-[80vw] hover:blur-md hover:bg-black backdrop-blur-md bg-white bg-opacity-20 shadow-md h-1 mx-auto my-10" />;
}

function Headlogo(props) {
  return <div id="logodiv" className="flex self-center items-center justify-items-center justify-self-center text-center pt-7 flex-row justify-center" >
    <p id="logo" className={`${kranky.className} hover:text-black hover:blur-md blur-0 truncate normal text-6xl select-none text-white drop-shadow-md`}>{props.headline}</p>
  </div>;
}

export default function site() {
  return (
    <div id="site">
      <Headlogo headline="ADHDO" />
      <Divider />
      <div id="actions" className="flex flex-row h-auto w-[100vw] justify-center justify-self-center overflow-hidden touch-pan-x">
        <Action icon="add" id="Add" color="#722f37" />
        <Action icon="login" id="Login" color="#4b3f72" />
        <Action icon="credit_card_heart" id="Donate" color="#357266" />
      </div>
    </div>
  );
}
