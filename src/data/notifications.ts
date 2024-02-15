import type { Notification, Post } from "@/types";
import { getRandom, getRandomId } from "@/utils/sidebar";
import { profiles } from "./profiles";
import { comments, dates, images } from "./base";

export const posts: Post[] = [
  {
    id: getRandomId(),
    type: "post",
    image: getRandom(images),
    date: getRandom(dates),
  },
  {
    id: getRandomId(),
    type: "reel",
    image: getRandom(images),
    date: getRandom(dates),
  },
  {
    id: getRandomId(),
    type: "post",
    image: getRandom(images),
    date: getRandom(dates),
  },
  {
    id: getRandomId(),
    type: "post",
    image: getRandom(images),
    date: getRandom(dates),
  },
  {
    id: getRandomId(),
    type: "reel",
    image: getRandom(images),
    date: getRandom(dates),
  },
];

export const notifications: Notification[] = [
  {
    id: getRandomId(),
    type: "comment",
    profile: getRandom(profiles),
    post: getRandom(posts),
    date: getRandom(dates),
    comment: getRandom(comments),
  },
  {
    id: getRandomId(),
    type: "follow",
    profile: getRandom(profiles),
    date: getRandom(dates),
  },
  {
    id: getRandomId(),
    type: "like",
    profiles: [getRandom(profiles), getRandom(profiles)],
    post: getRandom(posts),
    date: getRandom(dates),
  },
  {
    id: getRandomId(),
    type: "like",
    profiles: [getRandom(profiles), getRandom(profiles)],
    post: getRandom(posts),
    date: getRandom(dates),
  },
  {
    id: getRandomId(),
    type: "like",
    profiles: [getRandom(profiles), getRandom(profiles)],
    post: getRandom(posts),
    date: getRandom(dates),
  },
  {
    id: getRandomId(),
    type: "comment",
    profile: getRandom(profiles),
    post: getRandom(posts),
    date: getRandom(dates),
    comment: getRandom(comments),
  },
  {
    id: getRandomId(),
    type: "follow",
    profile: getRandom(profiles),
    date: getRandom(dates),
  },
];
