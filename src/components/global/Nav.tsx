import { Button } from "@/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { Logo } from "./Logo";

interface NavProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Nav: FC<NavProps> = ({ ...rest }) => {
  const menuItem = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div {...rest} className="flex justify-between p-3">
      <Logo />
      <div className="space-x-3 text-gray-800">
        {menuItem.map((item) => {
          return (
            <Link href={item.link} key={item.name} className="text-gray-800">
              {item.name}
            </Link>
          );
        })}
      </div>
      <div>
        <Button variant={"teal"}>
          <Heart className="white" fill="white" />
        </Button>
      </div>
    </div>
  );
};
