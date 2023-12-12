"use client";

import Image from "next/image";
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";

import { SearchIcon } from "lucide-react";
import { listOfAllSurah } from "./_data/ListOfAllSurah";

import kabaSymbol from "@/assets/Ilastrations/kaaba.png";
import madinaSymbol from "@/assets/Ilastrations/lantern.png";

interface DisplaySurahListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const DisplaySurahList: FC<DisplaySurahListProps> = ({ ...rest }) => {
  const [searchValue, setSearchValue] = useState("");
  const filterSurah = listOfAllSurah?.filter((item) => {
    if (searchValue === "") return item;

    return item.englishName.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div {...rest} className="space-y-10">
      <div className="h-20  w-4/5 rounded-full mx-auto bg-white  border shadow-lg  text-gray-900 flex gap-x-10 px-5 items-center">
        <SearchIcon />
        <input
          type="search"
          placeholder="Search any surah"
          className="w-full h-full outline-none rounded-full"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filterSurah?.map((item) => {
          return (
            <div
              key={item.number + item.name}
              className="bg-white shadow-lg rounded-lg p-5 m-5 text-gray-900 flex items-center justify-between"
            >
              <div className="rounded-md bg-gray-600  p-2 shadow-2xl   rotate-45 [&>*]:-rotate-45  ">
                {item.revelationType === "Meccan" ? (
                  <Image src={kabaSymbol} alt="Kaba" width={20} height={20} />
                ) : (
                  <Image
                    src={madinaSymbol}
                    alt="Madina"
                    width={20}
                    height={20}
                  />
                )}
              </div>
              <div className="flex-1 ml-3">
                <p>{item.englishName}</p>
                <p>{item.englishNameTranslation}</p>
              </div>
              <div>
                <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
