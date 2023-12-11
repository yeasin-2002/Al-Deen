import prayer from "@/assets/Ilastrations/muslim-man-is-praying.svg";
import Image from "next/image";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { ShowNames } from ".";

/**
 * The Hero component displays a hero section on the home page.
 * It includes an image of a person praying and a title.
 * The ShowNames component is also rendered below the title.
 */
interface HeroProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Hero: FC<HeroProps> = ({ ...rest }) => {
  return (
    <div
      {...rest}
      className="grid grid-cols-1 md:grid-cols-2 place-items-center   bg-gold-light"
    >
      <Image src={prayer} alt="prayer" className="w-3/5 justify-self-start" />

      <div className="flex-1 space-y-10 ">
        <h1 className="  font-extrabold  md:text-2xl  title-gradient">
          Stay connected with the almighty Allah
          <span className="ml-3 "> الله</span>
        </h1>
        <ShowNames />
      </div>
    </div>
  );
};
