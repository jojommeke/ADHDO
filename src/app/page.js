import Image from 'next/image'
import { Kranky } from 'next/font/google'

const kranky = Kranky({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal']
})
export default function Home() {
  return (
    <div className="flex self-center justify-center bg-gradient-to-r from-red-500 to-purple-950 h-screen text-center place-items-center">
      <p className={`${kranky.className} text-[10vw] drop-shadow-xl text-auto m-1 truncate`}>in development</p>
    </div>
  );
}
