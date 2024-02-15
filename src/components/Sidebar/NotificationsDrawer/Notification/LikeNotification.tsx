import Link from "next/link";
import Image from "next/image";
import type { LikeNotification as LikeNotificationType } from "@/types";
import clsx from "clsx";
import { getTimeAgoShort } from "@/utils/sidebar";
import { bodyClass, imageClass, itemClass, postClass } from ".";

const LikeNotification = ({ profiles, post, date }: LikeNotificationType) => {
  const [firstProfile, secondProfile] = profiles;

  const avatarClass =
    "object-cover rounded-full aspect-square w-8 h-8 outline outline-[1.5px] outline-background";

  return (
    <li className={itemClass}>
      <div className={imageClass}>
        {!secondProfile ? (
          <Link href={`/${firstProfile.username}`}>
            <Image
              src={firstProfile.image}
              alt={`${firstProfile.name}'s profile picture`}
              width={500}
              height={500}
              blurDataURL={firstProfile.image}
              className="object-cover rounded-full aspect-square"
            />
          </Link>
        ) : (
          <>
            <Link href={`/${secondProfile.username}`}>
              <Image
                src={secondProfile.image}
                alt={`${secondProfile.name}'s profile picture`}
                width={500}
                height={500}
                blurDataURL={secondProfile.image}
                className={clsx("absolute top-0 left-0", avatarClass)}
              />
            </Link>
            <Link href={`/${firstProfile.username}`}>
              <Image
                src={firstProfile.image}
                alt={`${firstProfile.name}'s profile picture`}
                width={500}
                height={500}
                blurDataURL={firstProfile.image}
                className={clsx("absolute bottom-0 right-0", avatarClass)}
              />
            </Link>
          </>
        )}
      </div>

      <div className={bodyClass}>
        {!secondProfile ? (
          <Link href={`/${firstProfile.username}`} className="font-semibold">
            {firstProfile.username}
          </Link>
        ) : (
          <span>
            <Link href={`/${firstProfile.username}`} className="font-semibold">
              {firstProfile.username}
            </Link>{" "}
            and{" "}
            <Link href={`/${secondProfile.username}`} className="font-semibold">
              {secondProfile.username}
            </Link>
          </span>
        )}
        <span> liked your {post.type}. </span>
        <span className="text-secondary-text">{getTimeAgoShort(date)}</span>
      </div>

      <div className={postClass}>
        <Image
          src={post.image}
          alt={`${post.type} image`}
          width={500}
          height={500}
          className="w-11 h-11 object-cover"
        />
      </div>
    </li>
  );
};

export default LikeNotification;
