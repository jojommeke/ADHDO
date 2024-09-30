import Image from 'next/image'
import { Kranky } from 'next/font/google'

const kranky = Kranky({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal']
})

export default function Home() {
  return (
    <div className="flex self-center items-center justify-items-center justify-self-center text-center p-7" >
      <p className={`${kranky.className} m-auto truncate normal text-6xl select-none text-white drop-shadow-md`}>ADHDO</p>
    </div >
  );
}
