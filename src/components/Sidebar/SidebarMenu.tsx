import type { SidebarMenu } from "@/types";
import Tooltip from "../Tooltip";
import { buttonClass, iconClass } from "./Sidebar";
import clsx from "clsx";

type SidebarMenuProps = {
  item: SidebarMenu;
  drawerOpen?: string;
  onContentHover: (hovered?: string) => void;
  hoveredMenu?: string;
};

const SidebarMenu = ({
  item,
  drawerOpen,
  onContentHover,
  hoveredMenu,
}: SidebarMenuProps) => {
  const { id, ariaLabel, icon, label, menu } = item;

  const Menu = menu;
  const Icon = icon;

  return (
    <Tooltip label={label} hideTooltip={hoveredMenu === id} mobileOnly>
      <li>
        <Menu
          id={id}
          trigger={
            <button className={buttonClass}>
              <Icon aria-label={ariaLabel} className={iconClass} />
              <span
                className={clsx({
                  hidden: drawerOpen,
                  "hidden md:block": !drawerOpen,
                })}
              >
                {label}
              </span>
            </button>
          }
          onContentHover={onContentHover}
        />
      </li>
    </Tooltip>
  );
};

export default SidebarMenu;
