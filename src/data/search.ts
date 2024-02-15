import type { Query, SearchResult } from "@/types";
import { getRandomId, getRandomNumber } from "@/utils/sidebar";
import { dates, queries as queryList } from "./base";
import { profiles } from ".";

export const queries: Query[] = [
  {
    id: getRandomId(),
    query: queryList[getRandomNumber(queryList.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    query: queryList[getRandomNumber(queryList.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    query: queryList[getRandomNumber(queryList.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    query: queryList[getRandomNumber(queryList.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    query: queryList[getRandomNumber(queryList.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    query: queryList[getRandomNumber(queryList.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    query: queryList[getRandomNumber(queryList.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    query: queryList[getRandomNumber(queryList.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    query: queryList[getRandomNumber(queryList.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    query: queryList[getRandomNumber(queryList.length)],
    date: dates[getRandomNumber(dates.length)],
  },
];

export const recent: SearchResult[] = [
  {
    id: getRandomId(),
    profile: profiles[getRandomNumber(profiles.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    profile: profiles[getRandomNumber(profiles.length)],
    date: dates[getRandomNumber(dates.length)],
  },
];

export const results: SearchResult[] = [
  {
    id: getRandomId(),
    profile: profiles[getRandomNumber(profiles.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    profile: profiles[getRandomNumber(profiles.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    profile: profiles[getRandomNumber(profiles.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    profile: profiles[getRandomNumber(profiles.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    profile: profiles[getRandomNumber(profiles.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    profile: profiles[getRandomNumber(profiles.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    profile: profiles[getRandomNumber(profiles.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    profile: profiles[getRandomNumber(profiles.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    profile: profiles[getRandomNumber(profiles.length)],
    date: dates[getRandomNumber(dates.length)],
  },
  {
    id: getRandomId(),
    profile: profiles[getRandomNumber(profiles.length)],
    date: dates[getRandomNumber(dates.length)],
  },
];
