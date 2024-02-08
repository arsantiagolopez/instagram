import { useRouter } from "next/router";
import {
  IconCreate,
  IconCreateFilled,
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
import Link from "next/link";
import clsx from "clsx";
import SearchDrawer from "./SearchDrawer";
import Logo from "./Logo";
import { useState } from "react";
import NotificationsDrawer from "./NotificationsDrawer";
import { DrawerProps } from "./Drawer";

const links = [
  {
    id: "home",
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
    icon: {
      base: IconSearch,
      active: IconSearchFilled,
    },
    ariaLabel: "Search",
    label: "Search",
    // drawer: {
    //   component: SearchDrawer,
    //   open: false,
    // },
    drawer: SearchDrawer,
  },
  {
    id: "explore",
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
    icon: {
      base: IconHeart,
      active: IconHeartFilled,
    },
    ariaLabel: "Notifications",
    label: "Notifications",
    // drawer: {
    //   component: SearchDrawer,
    //   open: false,
    // },
    drawer: NotificationsDrawer,
  },
  {
    id: "create",
    icon: {
      base: IconCreate,
      active: IconCreateFilled,
    },
    ariaLabel: "New post",
    label: "Create",
    href: "/create",
  },
];

const Sidebar = () => {
  const [openDrawer, setOpenDrawer] = useState<string>();

  const { pathname } = useRouter();

  const buttonClasses =
    "group w-full gap-4 flex items-center p-3 rounded-lg hover:bg-background-hover transition-all duration-200";
  const iconClasses =
    "w-6 h-6 group-hover:scale-105 transition-all pointer-events-none";

  return (
    <div
      className={clsx(
        "z-20 flex flex-col gap-5 h-dvh py-6 px-3 bg-background border-r border-r-borders transition-all duration-300 ease-out",
        {
          "w-nav-narrow md:w-nav-medium": !openDrawer,
          "w-nav-narrow border-r-0": openDrawer,
        }
      )}
    >
      <Logo openDrawer={openDrawer} />

      <div className="flex flex-col gap-2 mb-auto">
        {links.map(({ id, href, ariaLabel, icon, label, drawer }) => {
          if (drawer) {
            const isActive = openDrawer === id;

            const Drawer = drawer;
            const Icon = isActive ? icon.active : icon.base;

            const handleOpen: DrawerProps["onOpenChange"] = (open) => {
              setOpenDrawer(open ? id : undefined);
            };

            const handleBlur: DrawerProps["onInteractOutside"] = (event) => {
              const { target } = event;

              // Prevent `openDrawerState` from going undefined during blur
              // of an active drawer when selecting a different drawer
              if (target instanceof HTMLElement && target.id === "drawer") {
                event.preventDefault();
              }
            };

            return (
              <Drawer
                key={id}
                open={isActive}
                onOpenChange={handleOpen}
                onInteractOutside={handleBlur}
                trigger={
                  <button
                    id="drawer"
                    className={clsx(buttonClasses, "transition-none", {
                      "border border-white p-[11px]": isActive,
                    })}
                  >
                    <Icon aria-label={ariaLabel} className={iconClasses} />
                    <span
                      className={clsx({
                        hidden: openDrawer,
                        "hidden md:block": !openDrawer,
                      })}
                    >
                      {label}
                    </span>
                  </button>
                }
              />
            );
          }

          if (href) {
            const isActive = pathname === href;
            const Icon = isActive && !openDrawer ? icon.active : icon.base;

            return (
              <Link key={id} href={href} className={buttonClasses}>
                <Icon aria-label={ariaLabel} className={iconClasses} />
                <span
                  className={clsx({
                    "font-bold": isActive,
                    hidden: openDrawer,
                    "hidden md:block": !openDrawer,
                  })}
                >
                  {label}
                </span>
              </Link>
            );
          }
        })}
      </div>

      <div className="flex flex-col gap-2">
        <a className={buttonClasses}>
          <IconThreads aria-label="Threads" className={iconClasses} />
          <span
            className={clsx({
              hidden: openDrawer,
              "hidden md:block": !openDrawer,
            })}
          >
            Threads
          </span>
        </a>
        <button className={buttonClasses}>
          <IconMenu aria-label="Menu" className={iconClasses} />
          <span
            className={clsx({
              hidden: openDrawer,
              "hidden md:block": !openDrawer,
            })}
          >
            More
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
