import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface pageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Contact: FC<pageProps> = ({ ...rest }) => {
  return <div {...rest}>Contact</div>;
};
