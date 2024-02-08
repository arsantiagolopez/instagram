import type { IconProps } from ".";

export const IconSearchFilled = (props: IconProps) => {
  return (
    <svg
      role="img"
      fill="currentColor"
      viewBox="0 0 24 24"
      height="24"
      width="24"
      {...props}
    >
      <path
        d="M18.5 10.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      ></path>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        x1="16.511"
        x2="21.643"
        y1="16.511"
        y2="21.643"
      ></line>
    </svg>
  );
};
