// import babyName from "@/data/muslim-baby-names.json";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface pageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Allah99Names: FC<pageProps> = ({ ...rest }) => {
  return (
    <div className="p-4" {...rest}>
      <h1 className="title-gradient text-3xl font-bold my-10 ">
        Muslim Baby Names
      </h1>
    </div>
  );
};

export default Allah99Names;
