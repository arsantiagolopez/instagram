import type { Profile, Query } from "@/types";
import ProfileCard from "./ProfileCard";

export type ResultProps = {
  id: string;
  profile?: Profile;
  query?: Query;
  isRecent?: boolean;
};

const Result = ({ profile, isRecent }: ResultProps) => {
  if (profile) {
    return <ProfileCard profile={profile} isRecent={isRecent} />;
  }

  return null;
};

export default Result;
