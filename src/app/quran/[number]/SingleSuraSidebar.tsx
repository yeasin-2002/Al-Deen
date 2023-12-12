"use client";

import Link from "next/link";
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import { listOfAllSurah } from "../_data/ListOfAllSurah";

interface SingleSuraSidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const SingleSuraSidebar: FC<SingleSuraSidebarProps> = ({ ...rest }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <aside className="bg-gray-500  px-4  " {...rest}>
      <div>
        <p>Surah</p>
        <p>Page </p>
      </div>

      <div>
        <input
          type="search"
          className="outline-none border-gray-700 bg-gray-400  rounded-md py-3 my-4 placeholder:text-white  px-4 "
          placeholder="Search Surah"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {listOfAllSurah.map((item) => {
          return (
            <Link
              href={`/quran/${item.number}`}
              key={item.englishName}
              className="flex gap-x-4 py-4 bg-gray-300 rounded-sm  px-4  my-1"
            >
              <p>{item.number}</p>
              <p>{item.englishName}</p>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};
