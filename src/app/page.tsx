import React from 'react'
import Image from 'next/image'
import { Kranky } from 'next/font/google'

const kranky = Kranky({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal']
})

function Action(props) {
  return <div id={props.id} className={"size-12 rounded-lg flex justify-center flex-col" + " " + "bg-[" + props.color + "]"}>
    <span className="material-symbols-outlined text-center select-none">
      {props.icon}
    </span>
  </div >;
}

export default function site() {
  return (
    <div id="site">
      <div id="logodiv" className="flex self-center items-center justify-items-center justify-self-center text-center p-7 flex-row justify-center" >
        <p id="logo" className={`${kranky.className} mx-10 truncate normal text-6xl select-none text-white drop-shadow-md`}>ADHDO</p>
      </div>
      <div id="line" className="w-[80vw] backdrop-blur-md bg-white bg-opacity-20 shadow-md h-1 mx-auto" />
      <div id="actions" className="flex flex-row h-auto w-[100vw] justify-center justify-self-center mt-10">
        <Action icon="add" id="add" color="#722f37" />
      </div>
    </div>
  );
}
