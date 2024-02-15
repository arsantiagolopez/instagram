import clsx from "clsx";
import Divider from "@/components/Divider";
import type { NotificationList } from "@/types";
import Notification from "./Notification";

type SectionProps = {
  section: NotificationList;
  isFirst?: boolean;
};

const Section = ({ section, isFirst }: SectionProps) => {
  const { title, notifications } = section;

  return (
    <div className="flex flex-col">
      {!isFirst && <Divider className="mt-3" />}

      <h3
        className={clsx("font-bold mx-6 mb-[18px] leading-[18px]", {
          "mt-[22px]": !isFirst,
        })}
      >
        {title}
      </h3>

      <ul className="flex flex-col">
        {notifications.map((notification) => (
          <Notification key={notification.id} {...notification} />
        ))}
      </ul>
    </div>
  );
};

export default Section;
