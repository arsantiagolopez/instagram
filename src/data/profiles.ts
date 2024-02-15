import type { Profile } from "@/types";
import { getRandom, getRandomId } from "@/utils/sidebar";
import { images, names, usernames } from "./base";

export const profiles: Profile[] = [
  {
    id: getRandomId(),
    image: getRandom(images),
    username: getRandom(usernames),
    name: getRandom(names),
    stories: [],
  },
  {
    id: getRandomId(),
    image: getRandom(images),
    username: getRandom(usernames),
    name: getRandom(names),
    stories: [],
  },
  {
    id: getRandomId(),
    image: getRandom(images),
    username: getRandom(usernames),
    name: getRandom(names),
    stories: [],
  },
  {
    id: getRandomId(),
    image: getRandom(images),
    username: getRandom(usernames),
    name: getRandom(names),
    stories: [],
  },
  {
    id: getRandomId(),
    image: getRandom(images),
    username: getRandom(usernames),
    name: getRandom(names),
    stories: [],
  },
  {
    id: getRandomId(),
    image: getRandom(images),
    username: getRandom(usernames),
    name: getRandom(names),
    stories: [],
  },
  {
    id: getRandomId(),
    image: getRandom(images),
    username: getRandom(usernames),
    name: getRandom(names),
    stories: [],
  },
  {
    id: getRandomId(),
    image: getRandom(images),
    username: getRandom(usernames),
    name: getRandom(names),
    stories: [],
  },
  {
    id: getRandomId(),
    image: getRandom(images),
    username: getRandom(usernames),
    name: getRandom(names),
    stories: [],
  },
  {
    id: getRandomId(),
    image: getRandom(images),
    username: getRandom(usernames),
    name: getRandom(names),
    stories: [],
  },
];
