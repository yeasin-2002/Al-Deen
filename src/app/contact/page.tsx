import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface pageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Contact: FC<pageProps> = ({ ...rest }) => {
  return <div {...rest}>Contact</div>;
};

export default Contact;