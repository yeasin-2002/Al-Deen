import windowIcon from "@/assets/Ilastrations/windows.png";
import logoIcon from "@/assets/brand/logo.png";
import { contactItem, menuItem } from "@/data/navigation";
import Image from "next/image";
import Link from "next/link";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer: FC<FooterProps> = ({ ...rest }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-gray-600 body-font  greeny   " {...rest}>
      <div className=" px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={logoIcon}
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="ml-3 text-gray-700 text-xl">Al-Deen</span>
          </p>
          <p className="mt-2 text-sm text-gray-900 font-medium">
            For the muslims by the muslims
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              MENU
            </h2>
            <nav className="list-none mb-10 flex flex-col">
              {menuItem.map((item) => {
                return (
                  <Link
                    href={item.link}
                    key={item.link}
                    className="text-gray-600 hover:text-gray-800 transition-all"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className=" md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CONTACT
            </h2>
            <nav className="list-none mb-10 flex flex-col">
              {contactItem.map((item) => {
                return (
                  <a
                    className="text-gray-600 hover:text-gray-800 transition-all"
                    key={item.name}
                    href={item.link}
                    target="_blank"
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <div className="w-full  bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-2 py-2.5 ">
              <Image src={windowIcon} alt="windows" width={50} height={50} />
              <div className="text-left rtl:text-right">
                <div className="mb-1 text-xs">Get in on</div>
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Windows
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="greeny-light">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row ">
          <p className="text-gray-800 text-sm text-center font-bold sm:text-left">
            © Al-Deen {year}
          </p>
          <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-x-2 ">
            {contactItem.map((item) => {
              return (
                <a
                  key={item.name}
                  className="text-gray-500"
                  href={item.link}
                  target="_blank"
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
