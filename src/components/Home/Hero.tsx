import prayer from "@/assets/Ilastrations/muslim-man-is-praying.svg";

import Image from "next/image";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface HeroProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Hero: FC<HeroProps> = ({ ...rest }) => {
  return (
    <div
      {...rest}
      className="grid grid-cols-1 md:grid-cols-2 place-items-center   bg-gold-light"
    >
      <Image src={prayer} alt="prayer" className="w-3/5 justify-self-start" />

      <div className="flex-1 w-full">
        <h1 className="mb-4  font-extrabold  md:text-2xl lg:text-3xl">
          <span className="title-gradient">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, beatae.
          </span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicin g elit. Iusto nisi
          adipisci error voluptatibus autem eaque eos animi tempore porro
          aliquam explicabo minima nihil quis dicta distinctio, nemo quod beatae
          hic!
        </p>
      </div>
    </div>
  );
};
