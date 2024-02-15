import {
  differenceInSeconds,
  differenceInWeeks,
  differenceInMinutes,
  differenceInDays,
} from "date-fns";

export const getTimeAgoShort = (date: Date): string => {
  const now = new Date();

  const weeksAgo = differenceInWeeks(now, date);
  if (weeksAgo > 0) return `${weeksAgo}w`;

  const daysAgo = differenceInDays(now, date);
  if (daysAgo > 0) return `${daysAgo}d`;

  const minutesAgo = differenceInMinutes(now, date);
  if (minutesAgo > 0) return `${minutesAgo}m`;

  const secondsAgo = differenceInSeconds(now, date);
  return `${secondsAgo}s`;
};

export const getRandomId = (): string => {
  return `id_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
};

export const getRandomNumber = (max: number, min?: number): number => {
  min = min || 0;
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandom = <T>(entity: T[]): T => {
  return entity[getRandomNumber(entity.length)];
};
