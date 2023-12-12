import { SingleSurahDetailsResponse } from "@/interface";
import { notFound } from "next/navigation";

interface pageProps {
  params: {
    number: string;
  };
}
const fetchSingleSura = async (number: string) => {
  const res = await fetch(
    `http://api.alquran.cloud/v1/surah/${number}/en.asad`,
  );
  const data = (await res.json()) as SingleSurahDetailsResponse;
  return data;
};

const Sura = async ({ params }: pageProps) => {
  const { number } = params;
  const data = await fetchSingleSura(number);
  if (data.code == 404) return notFound();

  return <div className="bg-gray-100 ">{data.data.englishName}</div>;
};

export default Sura;
