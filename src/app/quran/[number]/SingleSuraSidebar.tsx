"use client";
import { CheckCircle, Languages } from "lucide-react";
import Link from "next/link";
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";

import { cn } from "@/lib";
import { useQuranStates } from "@/store";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui";
import { listOfAllSurah } from "../_data/ListOfAllSurah";

interface SingleSuraSidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const SingleSuraSidebar: FC<SingleSuraSidebarProps> = ({ ...rest }) => {
  const { isEnTranslation, setIsEnTranslation } = useQuranStates();
  const [searchValue, setSearchValue] = useState("");
  const [filterByPage, setFilterByPage] = useState(true);

  return (
    <aside className="bg-gray-500  p-4   " {...rest}>
      <div className="flex bg-gray-300 rounded-full justify-evenly   ">
        <p
          className={cn("py-3 cursor-pointer ", {
            underline: !filterByPage,
          })}
          onClick={() => setFilterByPage(false)}
        >
          Surah
        </p>
        <p
          className={cn("py-3 cursor-pointer ", {
            underline: filterByPage,
          })}
          onClick={() => setFilterByPage(true)}
        >
          Page
        </p>
      </div>

      <div>
        <div className="flex items-center  gap-x-2">
          <input
            type="search"
            className="outline-none border-gray-700 bg-gray-400  rounded-md py-3 my-4 placeholder:text-white  px-4 "
            placeholder="Search Surah"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <div className="bg-gold-light  p-2 rounded-md">
            <Popover>
              <PopoverTrigger>
                <Languages />
              </PopoverTrigger>
              <PopoverContent className="w-full space-y-3 ">
                <p
                  className="flex gap-x-2 items-center cursor-pointer"
                  onClick={() => setIsEnTranslation(true)}
                >
                  English {isEnTranslation && <CheckCircle width={20} />}
                </p>
                <p
                  className="flex gap-x-2 items-center cursor-pointer"
                  onClick={() => setIsEnTranslation(false)}
                >
                  Bangla {!isEnTranslation && <CheckCircle width={20} />}
                </p>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        {!filterByPage &&
          listOfAllSurah.map((item) => {
            return (
              <Link
                href={`/quran/${item.number}`}
                key={item.englishName}
                className="flex gap-x-2 py-4 bg-gray-300 rounded-sm  px-4  my-1"
              >
                <p>{item.number}.</p>
                <p>{item.englishName}</p>
              </Link>
            );
          })}

        {/*  */}
        {filterByPage &&
          Array.from({ length: 114 }).map((_, item) => {
            return (
              <Link
                href={`/quran/${item + 1}`}
                key={item}
                className="flex gap-x-2 py-4 bg-gray-300 rounded-sm  px-4  my-1"
              >
                <p>Page</p>
                <p>{item + 1}</p>
              </Link>
            );
          })}
      </div>
    </aside>
  );
};
