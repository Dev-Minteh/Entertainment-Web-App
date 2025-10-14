// components/NavIcons.tsx
interface IconProps {
  className?: string;
}

export const IconNavHome = ({ className }: IconProps) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 1L1 9H4V19H8V13H12V19H16V9H19L10 1Z"
      fill="currentColor"
    />
  </svg>
);

export const IconNavMovies = ({ className }: IconProps) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 2H18V18H2V2ZM4 4V16H16V4H4Z"
      fill="currentColor"
    />
  </svg>
);

export const IconNavSeries = ({ className }: IconProps) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 3H18V17H2V3ZM4 5V15H16V5H4Z"
      fill="currentColor"
    />
  </svg>
);

export const IconNavBookmark = ({ className }: IconProps) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 2H15C15.5523 2 16 2.44772 16 3V18L10 14L4 18V3C4 2.44772 4.44772 2 5 2Z"
      fill="currentColor"
    />
  </svg>
);
