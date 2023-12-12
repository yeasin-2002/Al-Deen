"use client";

import { $JUST_GET } from "@/hooks/useFetchers";
import { SingleSurahDetailsResponse } from "@/interface";
import { useQuranStates } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface TranslateEnOrBnProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  paramsNumber: string;
  ayatNumber: number;
  suraName: string;
}

//   - ar : http://api.alquran.cloud/v1/page/1/quran-uthmani
//   - bn : https://api.alquran.cloud/v1/page/1/bn.bengali

export const TranslateEnOrBn: FC<TranslateEnOrBnProps> = ({
  paramsNumber,
  ayatNumber,
  suraName,
  ...rest
}) => {
  const { isEnTranslation } = useQuranStates();
  const bn = useQuery({
    queryKey: ["quran-translate-bn", suraName],
    queryFn: () =>
      $JUST_GET(
        `http://api.alquran.cloud/v1/surah/${paramsNumber}/bn.bengali`,
      ) as Promise<SingleSurahDetailsResponse>,
  });
  const en = useQuery({
    queryKey: ["quran-translate-en", suraName],
    queryFn: () =>
      $JUST_GET(
        `https://api.alquran.cloud/v1/surah/${paramsNumber}/en.asad`,
      ) as Promise<SingleSurahDetailsResponse>,
  });

  return (
    <div {...rest}>
      {isEnTranslation ? (
        <p className="font-bold text-lg  text-gray-700">
          {en.isSuccess && en.data?.data.ayahs[ayatNumber]?.text}
        </p>
      ) : (
        <div className="font-bold text-lg  text-gray-700">
          {bn.isSuccess && bn.data?.data.ayahs[ayatNumber]?.text}
        </div>
      )}
    </div>
  );
};
