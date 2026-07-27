import { ImageResponse } from "next/og";

import { brandMarkPath } from "@/components/brand-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f4f0e8",
          borderRadius: 36,
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="#111111"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={brandMarkPath} />
        </svg>
      </div>
    ),
    { ...size },
  );
}
