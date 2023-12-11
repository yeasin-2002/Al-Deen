import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import ramzanMoon from "@/assets/Ilastrations/ramadan-moon.png";
import allah99Names from "@/data/99-Names-Of-Allah/99_Names_Of_Allah.json";
import Image from "next/image";

interface pageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Allah99Names: FC<pageProps> = ({ ...rest }) => {
  return (
    <div className="p-4 w-full" {...rest}>
      <div className="flex gap-x-2 my-6 w-full">
        <Image
          src={ramzanMoon}
          alt="Moon"
          className="aspect-square"
          width={100}
          height={100}
        />
        <h1 className="title-gradient text-3xl font-bold my-10 ">
          99 Names Of Allah
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 2xl:grid-cols-3   gap-4   ">
        {allah99Names.data.map((name) => {
          const meaning = name.en.meaning.replace(/\\/g, "");
          return (
            <div
              key={name.number}
              className="p-6 shadow-xl  text-center  rounded-lg bg-gold-light  shadow-teal-200/30 text-gray-900 space-y-2 "
            >
              <h2 className="font-bold text-5xl">{name.name}</h2>
              <p className="font-medium text-xl text-gray-600">
                {name.transliteration}
              </p>
              <div className="  border-gray-800 mt-4">
                <p>{meaning}</p>
                <p className="text-gray-600 mt-4">{name.en.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allah99Names;
