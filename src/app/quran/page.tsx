import { GodSymbol } from "@/components";
import { DisplaySurahList } from "./DisplaySurahList";

import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface pageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const About: FC<pageProps> = ({ ...rest }) => {
  return (
    <div {...rest} className="bg-gold-light">
      <GodSymbol className="w-28 h-28 mx-auto" />
      <DisplaySurahList />
    </div>
  );
};

export default About;
