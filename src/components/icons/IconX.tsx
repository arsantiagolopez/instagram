import type { IconProps } from ".";

export const IconX = (props: IconProps) => {
  return (
    <svg
      role="img"
      fill="currentColor"
      viewBox="0 0 24 24"
      height="16"
      width="16"
      {...props}
    >
      <polyline
        fill="none"
        points="20.643 3.357 12 12 3.353 20.647"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        data-darkreader-inline-stroke=""
      ></polyline>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        x1="20.649"
        x2="3.354"
        y1="20.649"
        y2="3.354"
        data-darkreader-inline-stroke=""
      ></line>
    </svg>
  );
};
