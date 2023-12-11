import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface pageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Contact: FC<pageProps> = ({ ...rest }) => {
  return <div {...rest}>Hadith</div>;
};

export default Contact;
