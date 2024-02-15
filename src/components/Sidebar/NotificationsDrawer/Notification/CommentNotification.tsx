import Link from "next/link";
import Image from "next/image";
import type { CommentNotification as CommentNotificationType } from "@/types";
import { getTimeAgoShort } from "@/utils/sidebar";
import { bodyClass, imageClass, itemClass, postClass } from ".";

const CommentNotification = ({
  profile,
  post,
  comment,
  date,
}: CommentNotificationType) => {
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
        <span> commented: {comment} </span>
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

export default CommentNotification;
