import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface pageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const About: FC<pageProps> = ({ ...rest }) => {
  return <div {...rest}>About</div>;
};
