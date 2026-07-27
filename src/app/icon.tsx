import { ImageResponse } from "next/og";

import { brandMarkPath } from "@/components/brand-mark";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
        }}
      >
        <svg
          width="24"
          height="24"
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
