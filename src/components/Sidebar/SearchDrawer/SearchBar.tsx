import {
  type ChangeEventHandler,
  type FocusEventHandler,
  useState,
} from "react";
import clsx from "clsx";
import { IconSearch } from "@/components/icons";
import { CloseIcon } from "@/utils/sprites";

type SearchBarProps = {
  className?: string;
};

const SearchBar = ({ className }: SearchBarProps) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const { relatedTarget } = event;

    if (relatedTarget?.id === "clear-button") {
      event.preventDefault();
      setValue("");
    }

    setIsFocused(false);
  };

  const inputClass = {
    base: "absolute h-full w-full bg-highlight-background rounded-lg pl-11 pr-4",
    interactive: "focus:px-4 focus:outline-none",
  };

  return (
    <div className={clsx("relative flex items-center h-10", className)}>
      <input
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Search"
        className={clsx(inputClass.base, inputClass.interactive)}
      />
      {!isFocused ? (
        <IconSearch className="absolute left-3 h-4 pointer-events-none text-placeholder" />
      ) : (
        <CloseIcon
          id="clear-button"
          className="absolute right-3 h-5 aspect-square"
        />
      )}

      {/* delete */}
      <CloseIcon
        id="clear-button"
        className="absolute right-3 h-5 aspect-square"
      />
    </div>
  );
};

export default SearchBar;
