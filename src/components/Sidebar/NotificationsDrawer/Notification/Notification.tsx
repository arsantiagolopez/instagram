import type { Notification as NotificationType } from "@/types";
import CommentNotification from "./CommentNotification";
import LikeNotification from "./LikeNotification";
import FollowNotification from "./FollowNotification";

const Notification = (props: NotificationType) => {
  switch (props.type) {
    case "like":
      return <LikeNotification {...props} />;

    case "comment":
      return <CommentNotification {...props} />;

    case "follow":
      return <FollowNotification {...props} />;
  }
};

export default Notification;
