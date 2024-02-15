import type { Dispatch, SetStateAction } from "react";
import { buttonClass, iconClass } from "./Sidebar";
import type { DrawerProps } from "../Drawer";
import Tooltip from "../Tooltip";
import type { SidebarDrawer } from "@/types";
import clsx from "clsx";

type SidebarDrawerProps = {
  item: SidebarDrawer;
  drawerOpen?: string;
  setDrawerOpen: Dispatch<SetStateAction<string | undefined>>;
};

const SidebarDrawer = ({
  item,
  drawerOpen,
  setDrawerOpen,
}: SidebarDrawerProps) => {
  const { id, ariaLabel, icon, label, drawer } = item;

  const isActive = drawerOpen === id;

  const Drawer = drawer;
  const Icon = isActive ? icon.active : icon.base;

  const handleOpen: DrawerProps["onOpenChange"] = (open) => {
    setDrawerOpen(open ? id : undefined);
  };

  const handleBlur: DrawerProps["onInteractOutside"] = (event) => {
    const { target } = event;

    // Prevent `drawerOpenState` from going undefined during blur
    // of an active drawer when selecting a different drawer
    if (target instanceof HTMLElement && target.id === "drawer") {
      event.preventDefault();
    }
  };

  return (
    <Tooltip label={label} hideTooltip={drawerOpen === id} mobileOnly>
      <li>
        <Drawer
          open={isActive}
          onOpenChange={handleOpen}
          onInteractOutside={handleBlur}
          trigger={
            <button
              id="drawer"
              className={clsx(buttonClass, "transition-none", {
                "border border-white p-[11px]": isActive,
              })}
            >
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
        />
      </li>
    </Tooltip>
  );
};

export default SidebarDrawer;
