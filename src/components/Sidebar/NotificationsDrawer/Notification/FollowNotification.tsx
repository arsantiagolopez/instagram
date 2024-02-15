import Link from "next/link";
import Image from "next/image";
import type { FollowNotification as FollowNotificationType } from "@/types";
import { getTimeAgoShort } from "@/utils/sidebar";
import { bodyClass, imageClass, itemClass } from ".";

const FollowNotification = ({ profile, date }: FollowNotificationType) => {
  const { username, image, name } = profile;

  return (
    <li className={itemClass}>
      <div className={imageClass}>
        <Link href={`/${username}`}>
          <Image
            src={image}
            alt={`${name}'s profile picture`}
            width={500}
            height={500}
            blurDataURL={image}
            className="object-cover rounded-full aspect-square"
          />
        </Link>
      </div>

      <div className={bodyClass}>
        <Link href={`/${username}`} className="font-semibold">
          {username}
        </Link>
        <span> started following you. </span>
        <span className="text-secondary-text">{getTimeAgoShort(date)}</span>
      </div>

      <button className="text-sm font-semibold leading-[18px] bg-primary-button hover:bg-primary-button-hover px-5 py-[7px] rounded-lg">
        Follow
      </button>
    </li>
  );
};

export default FollowNotification;
