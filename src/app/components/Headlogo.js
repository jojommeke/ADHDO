//initialize google font
import { Kranky } from "next/font/google";

const kranky = Kranky({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function Headlogo(props) {
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
