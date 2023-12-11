import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface pageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Favorite: FC<pageProps> = ({ ...rest }) => {
  return <div {...rest}></div>;
};

export default Favorite;
