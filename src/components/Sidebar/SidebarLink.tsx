import { useRouter } from "next/router";
import Link from "next/link";
import { buttonClass, iconClass } from "./Sidebar";
import clsx from "clsx";
import Tooltip from "../Tooltip";
import type { SidebarLink } from "@/types";

type SidebarLinkProps = {
  item: SidebarLink;
  drawerOpen?: string;
};

const SidebarLink = ({ item, drawerOpen }: SidebarLinkProps) => {
  const { href, icon, ariaLabel, label } = item;

  const { pathname } = useRouter();

  const isActive = pathname === href;
  const Icon = isActive && !drawerOpen ? icon.active : icon.base;

  return (
    <Tooltip label={label} mobileOnly>
      <li>
        <Link href={href} className={buttonClass}>
          <Icon aria-label={ariaLabel} className={iconClass} />
          <span
            className={clsx({
              "font-bold": isActive,
              hidden: drawerOpen,
              "hidden md:block": !drawerOpen,
            })}
          >
            {label}
          </span>
        </Link>
      </li>
    </Tooltip>
  );
};

export default SidebarLink;
