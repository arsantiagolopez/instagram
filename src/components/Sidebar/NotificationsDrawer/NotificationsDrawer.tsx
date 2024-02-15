import { getRandomId, getRandomNumber } from "@/utils/sidebar";
import Drawer, { type DrawerProps } from "@/components/Drawer";
import Section from "./Section";
import { notifications } from "@/data";
import { isThisMonth, isThisWeek, isToday } from "date-fns";
import type { Notification } from "@/types";
import { useEffect, useState } from "react";
import NotificationsSkeleton from "./NotificationsSkeleton";

type Section = {
  id: string;
  title: "Today" | "This Week" | "This Month" | "Earlier";
  notifications: Notification[];
};

const NotificationsDrawer = (props: DrawerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  let today: Section = {
    id: getRandomId(),
    title: "Today",
    notifications: [],
  };
  let week: Section = {
    id: getRandomId(),
    title: "This Week",
    notifications: [],
  };
  let month: Section = {
    id: getRandomId(),
    title: "This Month",
    notifications: [],
  };
  let earlier: Section = {
    id: getRandomId(),
    title: "Earlier",
    notifications: [],
  };

  for (const notification of notifications) {
    const { date } = notification;

    if (isToday(date)) {
      today.notifications.push(notification);
    } else if (isThisWeek(date)) {
      week.notifications.push(notification);
    } else if (isThisMonth(date)) {
      month.notifications.push(notification);
    } else {
      earlier.notifications.push(notification);
    }
  }

  const sections = isLoaded
    ? [today, week, month, earlier].filter(
        ({ notifications }) => notifications.length
      )
    : [];

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, getRandomNumber(3000, 1000));
  }, []);

  return (
    <Drawer {...props}>
      <div className="flex flex-col py-2 h-dvh overflow-y-auto">
        <h2 className="text-2xl text-primary-text leading-[18px] mx-6 mt-4 mb-6 font-semibold">
          Notifications
        </h2>

        {!sections.length ? (
          <NotificationsSkeleton />
        ) : (
          sections.map((section, index) => (
            <Section key={section.id} section={section} isFirst={!index} />
          ))
        )}
      </div>
    </Drawer>
  );
};

export default NotificationsDrawer;
