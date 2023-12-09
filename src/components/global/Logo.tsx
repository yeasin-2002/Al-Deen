import logImg from "@/assets/brand/logo-transparent.png";
import Image from "next/image";



export const Logo = ({ ...rest }) => {
  return (
    <Image src={logImg} width={40} height={40} alt="Al-Deen Logo" {...rest} />
  );
};
