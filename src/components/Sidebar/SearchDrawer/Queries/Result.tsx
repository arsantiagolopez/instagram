import { IconSearch } from "@/components/icons";
import type { Query } from "@/types";

const Result = ({ query }: Query) => {
  return (
    <li className="group flex items-center gap-3 py-2 px-6 cursor-pointer hover:bg-background-hover">
      <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-highlight-background group-hover:brightness-95 dark:group-hover:brightness-150">
        <IconSearch className="w-4" />
      </div>
      <span className="text-sm text-primary-text leading-[18px]">{query}</span>
    </li>
  );
};

export default Result;
