import * as React from "react";
import type { IconProps } from "./types";

export function LockIcon({ className, strokeWidth = 1.8, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" {...props}>
      <path
        d="M7.5 11V8.8C7.5 6.15 9.52 4 12 4s4.5 2.15 4.5 4.8V11"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6.5 11h11v9h-11v-9Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M12 15.2v2.2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}