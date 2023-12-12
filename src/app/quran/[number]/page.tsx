import { SingleSurahDetailsResponse } from "@/interface";
import { notFound } from "next/navigation";
import { TranslateEnOrBn } from "./TranslateEnOrBn";

interface pageProps {
  params: {
    number: string;
  };
}
const fetchSingleSura = async (number: string) => {
  const res = await fetch(`http://api.alquran.cloud/v1/surah/${number}`);
  const data = (await res.json()) as SingleSurahDetailsResponse;
  return data;
};

const Sura = async ({ params }: pageProps) => {
  const { number } = params;
  const data = await fetchSingleSura(number);
  if (data.code == 404) return notFound();

  return (
    <div className="bg-gold-light py-10  ">
      <div>
        <p className="text-center font-bold text-4xl ">{data.data.name}</p>
        <p className="text-center font-bold text-xl ">
          {data.data.englishName}
        </p>
      </div>

      <div className="space-y-7 ">
        {data.data.ayahs.map((item, index) => {
          return (
            <div
              key={item.number}
              className="shadow py-10 text-end space-y-5 px-4"
            >
              <p className="font-bold text-4xl">{item.text}</p>
              <TranslateEnOrBn
                paramsNumber={params.number}
                ayatNumber={index}
                suraName={data.data.englishName}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sura;
