import Image from "next/image";
import Link from "next/link";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import babyFace from "@/assets/GIF/baby.gif";
import allahSymbol from "@/assets/Ilastrations/allahName.svg";

interface ShowNamesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ShowNames: FC<ShowNamesProps> = ({ ...rest }) => {
  return (
    <div
      className="py-4 flex items-center gap-x-3 justify-center mt-6"
      {...rest}
    >
      <Link
        href={"/allah99Names"}
        className={"flex items-center gap-x-2 greeny-rl  px-4 py-21"}
      >
        <Image src={allahSymbol} alt="Allah" width={70} height={70} />
        <p className="text-gray-700 font-medium ">99 Names Of Allah</p>
      </Link>
      <Link
        href={"/islamic-name"}
        className={"flex items-center gap-x-2 greeny px-4 py-21"}
      >
        <Image src={babyFace} alt="Allah" width={70} height={70} />
        <p className="text-gray-700 font-medium ">Islamic Baby Names</p>
      </Link>
    </div>
  );
};
