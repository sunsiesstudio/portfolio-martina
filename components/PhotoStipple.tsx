"use client";

import { useId } from "react";

// A dense cross-stitch style texture, meant to sit over a blurred photo
// the way a stitched/pixel overlay traces over a soft-focus subject.
export function PhotoStipple({ className }: { className?: string }) {
  const id = `photo-stipple-${useId().replace(/:/g, "")}`;
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern id={id} width="18" height="18" patternUnits="userSpaceOnUse">
          <text x="0" y="8" fontSize="7" fill="white">
            x
          </text>
          <text x="9" y="16" fontSize="6" fill="white">
            +
          </text>
          <text x="4" y="15" fontSize="5" fill="white">
            .
          </text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
