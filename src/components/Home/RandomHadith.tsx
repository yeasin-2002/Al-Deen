import { promises as fs } from "fs";
import Image from "next/image";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import topToBottomArrow from "@/assets/Ilastrations/arrow-top-bottom.svg";
import bottomToTopArrow from "@/assets/Ilastrations/bottom-to-top.svg";
import quoteIcon from "@/assets/Ilastrations/quote.svg";
import hadithDB from "@/data/Hadith/hadith.json";

interface RandomHadithProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const RandomHadith: FC<RandomHadithProps> = async ({ ...rest }) => {
  // It will be replaced by Hadith API
  const hadithData = await fs.readFile(
    process.cwd() + "/src/data/Hadith/hadith.json",
    "utf8",
  );
  const perseHadith = (await JSON.parse(hadithData)) as typeof hadithDB;
  const randomHadith =
    perseHadith.data[Math.floor(Math.random() * perseHadith.data.length)];

  return (
    <div {...rest}>
      <h1 className="heading-main">Hadith For Today</h1>
      <div className="shadow-2xl     m-4 relative shadow-teal-500/50">
        <div className="py-5 px-2">
          <p className="title-gradient font-semibold my-2">
            {randomHadith.englishNarrator}
          </p>

          <div className="space-y-3">
            <p className="text-night-blue">{randomHadith.hadithArabic}</p>
            <p>
              meaning: <br />
              <span className="text-night-blue">
                {randomHadith.hadithEnglish}
              </span>
            </p>
          </div>
          <div className="grid justify-end  mt-5  ">
            <p className="title-gradient font-medium text-lg  ">Reference:</p>
            <p>
              Book: {randomHadith.book.bookName} -{" "}
              {randomHadith.chapter.chapterNumber} (
              {randomHadith.chapter.chapterArabic})
            </p>
            <p> Writer : {randomHadith.book.writerName} </p>
          </div>
        </div>

        <div>
          <Image
            src={topToBottomArrow}
            alt="quote"
            className="absolute top-1 right-1 "
          />
          <Image
            src={bottomToTopArrow}
            alt="quote"
            className="absolute bottom-1 left-1 "
          />
        </div>
        <Image
          src={quoteIcon}
          width={50}
          height={50}
          alt="quote"
          className="absolute -top-8 -left-5 "
        />
      </div>
    </div>
  );
};
