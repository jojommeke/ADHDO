import React from 'react'
import Image from 'next/image'
import { Kranky } from 'next/font/google'

const kranky = Kranky({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal']
})

export default function site() {
  return (
    <div id="site">
      <div id="logodiv" className="flex self-center items-center justify-items-center justify-self-center text-center p-7 flex-row justify-center" >
        <p id="logo" className={`${kranky.className} mx-10 truncate normal text-6xl select-none text-white drop-shadow-md`}>ADHDO</p>
      </div>
      <div id="line" className="w-[80vw] backdrop-blur-md bg-white bg-opacity-20 shadow-md h-1 mx-auto" />
      <div id="actions" className="flex flex-row h-auto w-[100vw] justify-center justify-self-center mt-10">
        <div id="add" className="size-12 rounded-lg bg-[#722f37] flex justify-center flex-col">
          <span className="material-symbols-outlined text-center select-none">
            add
          </span>
        </div>
      </div>
    </div>
  );
}
