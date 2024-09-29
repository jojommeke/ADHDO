import Image from 'next/image'
import { Kranky } from 'next/font/google'

const kranky = Kranky({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal']
})
export default function Home() {
  return (
    <div className="flex self-center justify-center bg-gradient-to-r from-red-500 to-purple-950 text-center place-items-center"></div>
  );
}
