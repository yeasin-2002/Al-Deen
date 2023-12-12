import { SingleSurahDetailsResponse } from "@/interface";
import type { Metadata } from "next";
import React from "react";
import { SingleSuraSidebar } from "./SingleSuraSidebar";

type Props = {
  params: { number: string };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const res = await fetch(
    `http://api.alquran.cloud/v1/surah/${params.number}/en.asad`,
  );
  const data = (await res.json()) as SingleSurahDetailsResponse;
  return {
    title: `${data.data.englishName}`,
  };
};

export default function SingleQuranLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full ">
      <SingleSuraSidebar />
      {children}
    </div>
  );
}
