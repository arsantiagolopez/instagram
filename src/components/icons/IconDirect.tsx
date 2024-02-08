import type { IconProps } from ".";

export const IconDirect = (props: IconProps) => {
  return (
    <svg
      role="img"
      fill="currentColor"
      viewBox="0 0 24 24"
      height="24"
      width="24"
      {...props}
    >
      <line
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="22"
        x2="9.218"
        y1="3"
        y2="10.083"
      ></line>
      <polygon
        fill="none"
        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    </svg>
  );
};
