import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface pageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Favorite: FC<pageProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <h1>Favorite</h1>
    </div>
  );
};

export default Favorite;
