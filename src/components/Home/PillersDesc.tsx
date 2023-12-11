"use client";

import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";

interface PillarsDescProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  desc: string;
}

export const PillarsDesc: FC<PillarsDescProps> = ({ desc, ...rest }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const lessDesc = desc.slice(0, 100);
  return (
    <p {...rest}>
      {isShowMore ? desc : lessDesc}

      {!isShowMore ? (
        <span
          className="text-blue-900 font-semibold cursor-pointer"
          onClick={() => setIsShowMore(true)}
        >
          ...more
        </span>
      ) : (
        <span
          className="text-blue-900 cursor-pointer font-semibold mx-2"
          onClick={() => setIsShowMore(false)}
        >
          ..less
        </span>
      )}
    </p>
  );
};
