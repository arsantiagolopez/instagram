import clsx from "clsx";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type CloseIconProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const CloseIcon = ({ className, ...props }: CloseIconProps) => {
  const closeIconClass =
    "bg-[length:440px_411px] bg-[position:-380px_-96px] bg-[url('/assets/images/icons.png')]";

  return <button className={clsx(closeIconClass, className)} {...props} />;
};

export const StoryRing = () => {
  const storyRingClass =
    "bg-[length:295px] bg-[position:251.75px_677.75px] bg-[url('/assets/images/icons.png')]";

  return (
    <canvas
      className={clsx(
        "absolute scale-[1.20] w-full aspect-square",
        storyRingClass
      )}
    />
  );
};
