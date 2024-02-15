import type { FC } from "react";
import type { DrawerProps } from "@/components/Drawer";
import type { MenuProps } from "@/components/Menu";
import type { IconProps } from "@/components/icons";

type SidebarIcon = {
  base: FC<IconProps>;
  active: FC<IconProps>;
};

type SidebarBaseItem = {
  id: string;
  ariaLabel: string;
  label: string;
};

export type SidebarLink = SidebarBaseItem & {
  type: "link";
  icon: SidebarIcon;
  href: string;
};

export type SidebarDrawer = SidebarBaseItem & {
  type: "drawer";
  icon: SidebarIcon;
  drawer: FC<DrawerProps>;
};

export type SidebarMenu = SidebarBaseItem & {
  type: "menu";
  icon: FC<IconProps>;
  menu: FC<MenuProps>;
};

export type SidebarItem = SidebarLink | SidebarDrawer | SidebarMenu;

export type Query = {
  id: string;
  query: string;
  date: Date;
};

export type SearchResult = {
  id: string;
  profile: Profile;
  date: Date;
};

export type Story = {
  id: number;
  image: string;
  date: Date;
};

export type Profile = {
  id: string;
  image: string;
  username: string;
  name: string;
  stories: Story[];
};

export type Post = {
  id: string;
  type: "photo" | "post" | "reel";
  image: string;
  date: Date;
};

type NotificationBase = {
  id: string;
  date: Date;
};

export type LikeNotification = NotificationBase & {
  type: "like";
  profiles: Profile[];
  post: Post;
};

export type CommentNotification = NotificationBase & {
  type: "comment";
  profile: Profile;
  post: Post;
  comment: string;
};

export type FollowNotification = NotificationBase & {
  type: "follow";
  profile: Profile;
};

export type Notification =
  | LikeNotification
  | CommentNotification
  | FollowNotification;

export type NotificationList = {
  id: string;
  title: string;
  notifications: Notification[];
};
