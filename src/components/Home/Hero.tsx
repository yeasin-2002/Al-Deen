import prayer from "@/assets/Ilastrations/muslim-man-is-praying.svg";


import Image from "next/image";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { ShowNames } from ".";

interface HeroProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Hero: FC<HeroProps> = ({ ...rest }) => {
  return (
    <div
      {...rest}
      className="grid grid-cols-1 md:grid-cols-2 place-items-center   bg-gold-light"
    >
      <Image src={prayer} alt="prayer" className="w-3/5 justify-self-start" />

      <div className="flex-1   w-full">
        <h1 className="mb-4  font-extrabold  md:text-2xl lg:text-3xl title-gradient">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, beatae.
        </h1>
        <ShowNames />
      </div>
    </div>
  );
};
