import { IconX } from "@/components/icons";
import type { Profile } from "@/types";
import { StoryRing } from "@/utils/sprites";
import Image from "next/image";

type ProfileCardProps = {
  profile: Profile;
  isRecent?: boolean;
};

const ProfileCard = ({ profile, isRecent }: ProfileCardProps) => {
  const { image, username, name, stories } = profile;

  const alt = `${username || name}'s profile picture`;

  return (
    <li className="relative group flex items-center gap-3 py-2 px-6 cursor-pointer hover:bg-background-hover">
      <div className="relative flex items-center justify-center w-11 h-11 rounded-full group-hover:brightness-125">
        <Image
          alt={alt}
          src={image}
          width={500}
          height={500}
          blurDataURL={image}
          className="object-cover rounded-full aspect-square"
        />
        {!!stories.length && <StoryRing />}
      </div>
      <div className="flex flex-col text-sm">
        <p className="text-primary-text font-semibold">{username}</p>
        <span className="text-secondary-text leading-[18px]">{name}</span>
      </div>

      {isRecent && (
        <IconX
          aria-label="Close"
          className="absolute right-8 text-secondary-text"
        />
      )}
    </li>
  );
};

export default ProfileCard;
