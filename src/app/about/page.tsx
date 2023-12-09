import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface pageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

 const About: FC<pageProps> = ({ ...rest }) => {
   return <div {...rest}>About</div>;
 };

 export default About;