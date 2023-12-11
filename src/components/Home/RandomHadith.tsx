import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface RandomHadithProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const RandomHadith: FC<RandomHadithProps> = ({ ...rest }) => {
  return <div {...rest}>RandomHadith</div>;
};
