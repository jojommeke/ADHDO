import React from 'react'
import Image from 'next/image'
import { Kranky } from 'next/font/google'

const kranky = Kranky({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal']
})

function Action(props) {
  return <div id={props.id} alt={props.id} className={"mx-2 size-12 rounded-lg flex justify-center flex-col shadow-md" + " " + "bg-[" + props.color + "]"} style={{ 'background': props.color }}>
    <span className="material-symbols-outlined text-center select-none text-white">
      {props.icon}
    </span>
  </div>;
}

function Divider() {
  return <div id="line" className="w-[80vw] backdrop-blur-md bg-white bg-opacity-20 shadow-md h-1 mx-auto my-10" />;
}

function Headlogo() {
  return <div id="logodiv" className="flex self-center items-center justify-items-center justify-self-center text-center pt-7 flex-row justify-center" >
    <p id="logo" className={`${kranky.className} truncate normal text-6xl select-none text-white drop-shadow-md`}>ADHDO</p>
  </div>;
}

export default function site() {
  return (
    <div id="site">
      <Headlogo />
      <Divider />
      <div id="actions" className="flex flex-row h-auto w-[100vw] justify-center justify-self-center">
        <Action icon="add" id="add" color="#722f37" />
        <Action icon="login" id="login" color="#4b3f72" />
        <Action icon="credit_card_heart" id="donate" color="#357266" />
      </div>
    </div>
  );
}
