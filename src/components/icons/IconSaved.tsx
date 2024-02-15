import type { IconProps } from ".";

export const IconSaved = (props: IconProps) => {
  return (
    <svg
      role="img"
      fill="currentColor"
      viewBox="0 0 24 24"
      height="18"
      width="18"
      {...props}
    >
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    </svg>
  );
};
