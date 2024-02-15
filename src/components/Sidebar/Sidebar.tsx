import { useState } from "react";
import {
  IconCreate,
  IconDirect,
  IconDirectFilled,
  IconExplore,
  IconExploreFilled,
  IconHeart,
  IconHeartFilled,
  IconHome,
  IconHomeFilled,
  IconMenu,
  IconReels,
  IconReelsFilled,
  IconSearch,
  IconSearchFilled,
  IconThreads,
} from "../icons";
import clsx from "clsx";
import Logo from "./Logo";
import SearchDrawer from "./SearchDrawer";
import NotificationsDrawer from "./NotificationsDrawer";
import SidebarDrawer from "./SidebarDrawer";
import SidebarLink from "./SidebarLink";
import type { SidebarItem } from "@/types";
import Tooltip from "../Tooltip";
import CreateMenu from "./CreateMenu";
import SidebarMenu from "./SidebarMenu";
import MoreMenu from "./MoreMenu";

const items: SidebarItem[] = [
  {
    id: "home",
    type: "link",
    icon: {
      base: IconHome,
      active: IconHomeFilled,
    },
    ariaLabel: "Home",
    label: "Home",
    href: "/",
  },
  {
    id: "search",
    type: "drawer",
    icon: {
      base: IconSearch,
      active: IconSearchFilled,
    },
    ariaLabel: "Search",
    label: "Search",
    drawer: SearchDrawer,
  },
  {
    id: "explore",
    type: "link",
    icon: {
      base: IconExplore,
      active: IconExploreFilled,
    },
    ariaLabel: "Explore",
    label: "Explore",
    href: "/explore",
  },
  {
    id: "reels",
    type: "link",
    icon: {
      base: IconReels,
      active: IconReelsFilled,
    },
    ariaLabel: "Reels",
    label: "Reels",
    href: "/reels",
  },
  {
    id: "messages",
    type: "link",
    icon: {
      base: IconDirect,
      active: IconDirectFilled,
    },
    ariaLabel: "Direct",
    label: "Messages",
    href: "/messages",
  },
  {
    id: "notifications",
    type: "drawer",
    icon: {
      base: IconHeart,
      active: IconHeartFilled,
    },
    ariaLabel: "Notifications",
    label: "Notifications",
    drawer: NotificationsDrawer,
  },
  {
    id: "create",
    type: "menu",
    icon: IconCreate,
    ariaLabel: "New post",
    label: "Create",
    menu: CreateMenu,
  },
];

export const buttonClass =
  "group w-full gap-4 flex items-center p-3 rounded-lg hover:bg-background-hover active:opacity-50 transition-all duration-200";

export const iconClass =
  "w-6 h-6 min-w-6 min-h-6 group-hover:scale-105 group-active:scale-95 transition-all pointer-events-none";

const Sidebar = () => {
  const [drawerOpen, setDrawerOpen] = useState<string>();
  const [hoveredMenu, setHoveredMenu] = useState<string>();

  const handleContentHover = (hovered?: string) => {
    setHoveredMenu(hovered);
  };

  return (
    <div
      className={clsx(
        "z-20 flex flex-col gap-5 h-dvh py-6 px-3 bg-background border-r border-r-borders transition-all duration-300 ease-out",
        {
          "w-nav-narrow md:w-nav-medium": !drawerOpen,
          "w-nav-narrow border-r-0": drawerOpen,
        }
      )}
    >
      <Logo drawerOpen={drawerOpen} />

      <ul className="flex flex-col gap-2 mb-auto">
        {items.map((item) => {
          const { id, type } = item;

          switch (type) {
            case "drawer":
              return (
                <SidebarDrawer
                  key={id}
                  item={item}
                  drawerOpen={drawerOpen}
                  setDrawerOpen={setDrawerOpen}
                />
              );

            case "link":
              return (
                <SidebarLink key={id} item={item} drawerOpen={drawerOpen} />
              );

            case "menu":
              return (
                <SidebarMenu
                  key={id}
                  item={item}
                  drawerOpen={drawerOpen}
                  onContentHover={handleContentHover}
                  hoveredMenu={hoveredMenu}
                />
              );
          }
        })}
      </ul>

      <ul className="flex flex-col gap-2">
        <Tooltip label="Threads" mobileOnly>
          <li>
            <a
              href="https://threads.net"
              className={clsx(buttonClass, "cursor-pointer")}
            >
              <IconThreads aria-label="Threads" className={iconClass} />
              <span
                className={clsx({
                  hidden: drawerOpen,
                  "hidden md:block": !drawerOpen,
                })}
              >
                Threads
              </span>
            </a>
          </li>
        </Tooltip>

        <Tooltip label="More" hideTooltip={hoveredMenu === "menu"} mobileOnly>
          <li>
            <MoreMenu
              id="menu"
              trigger={
                <button className={buttonClass}>
                  <IconMenu aria-label="Menu" className={iconClass} />
                  <span
                    className={clsx({
                      hidden: drawerOpen,
                      "hidden md:block": !drawerOpen,
                    })}
                  >
                    More
                  </span>
                </button>
              }
              onContentHover={handleContentHover}
            />
          </li>
        </Tooltip>
      </ul>
    </div>
  );
};

export default Sidebar;
