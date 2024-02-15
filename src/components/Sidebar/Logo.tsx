import clsx from "clsx";
import Link from "next/link";
import { IconBrand, IconBrandLogo } from "../icons";

type LogoProps = {
  drawerOpen?: string;
};

const Logo = ({ drawerOpen }: LogoProps) => {
  return (
    <div className="h-[60px]">
      <Link href="/" className="relative">
        <IconBrand
          aria-label="Instagram"
          className={clsx(
            "absolute p-3 box-content mt-1 transition-all duration-300",
            {
              "scale-80 md:scale-100 opacity-0 md:opacity-100 origin-left":
                !drawerOpen,
              "opacity-0": drawerOpen,
            }
          )}
        />
        <IconBrandLogo
          aria-label="Instagram"
          className={clsx(
            "absolute p-3 h-6 w-6 box-content rounded-lg hover:bg-background-hover",
            {
              "scale-100 md:scale-0 opacity-100 md:opacity-0 duration-300":
                !drawerOpen,
              "block hover:scale-105 duration-200": drawerOpen,
            }
          )}
        />
      </Link>
    </div>
  );
};

export default Logo;
