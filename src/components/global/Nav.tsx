"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import moonStar from "@/assets/Ilastrations/moon-star.png";
import { menuItem } from "@/data/navigation";
import { Logo } from "./Logo";

interface NavProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Nav: FC<NavProps> = ({ ...rest }) => {
  const path = usePathname();

  return (
    <div {...rest} className="flex justify-between p-3 bg-gold-light ">
      <Link href={"/"}>
        <Logo />
      </Link>
      <div className="space-x-3 text-gray-800">
        {menuItem.map((item) => {
          return (
            <Link
              href={item.link}
              key={item.name}
              className="text-gray-800 relative font-semibold"
            >
              {path === item.link && (
                <Image
                  src={moonStar}
                  alt="moon"
                  width={10}
                  height={10}
                  className="absolute -top-1 -right-2"
                />
              )}

              {item.name}
            </Link>
          );
        })}
      </div>

      <Link
        href={"/favorite"}
        className="greeny  px-4  grid place-items-center rounded-md"
      >
        <Heart className=" text-white" fill="white" />
      </Link>
    </div>
  );
};
