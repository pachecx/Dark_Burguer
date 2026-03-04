import type { IconProps } from "./types";

export function ArrowRightIcon({ className, strokeWidth = 1.8, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M5 12h12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="m13 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}