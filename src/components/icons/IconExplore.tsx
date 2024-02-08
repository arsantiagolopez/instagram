import type { IconProps } from ".";

export const IconExplore = (props: IconProps) => {
  return (
    <svg
      role="img"
      fill="currentColor"
      viewBox="0 0 24 24"
      height="24"
      width="24"
      {...props}
    >
      <polygon
        fill="none"
        points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
      <polygon
        fillRule="evenodd"
        points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
      ></polygon>
      <circle
        cx="12.001"
        cy="12.005"
        fill="none"
        r="10.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></circle>
    </svg>
  );
};
