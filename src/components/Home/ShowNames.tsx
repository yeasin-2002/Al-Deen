import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import allahSymbol from "@/assets/Ilastrations/allahName.svg";
import Image from "next/image";
import Link from "next/link";

interface ShowNamesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ShowNames: FC<ShowNamesProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <div className="my-4 flex items-center gap-x-3 justify-center">
        <Link
          href={"/islamic-name"}
          className={"flex items-center gap-x-2 greeny"}
        >
          <Image src={allahSymbol} alt="Allah" />
          99 Name Of Allah
        </Link>
        <Link
          href={"/allah99Names"}
          className={"flex items-center gap-x-2 greeny"}
        >
          <Image src={allahSymbol} alt="Allah" />
          99 Name Of Allah
        </Link>
      </div>
    </div>
  );
};
