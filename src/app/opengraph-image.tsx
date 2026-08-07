import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt =
  "Mike Hamer Gardens — landscaping and garden services in Stroud";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f2f0eb",
          color: "#2c2c2a",
          display: "flex",
          height: "100%",
          padding: "68px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid #1f3a2e",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "54px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              fontSize: 27,
              fontWeight: 700,
              gap: 18,
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "#1f3a2e",
                color: "#f2f0eb",
                display: "flex",
                fontSize: 26,
                height: 62,
                justifyContent: "center",
                letterSpacing: "-0.04em",
                width: 62,
              }}
            >
              MH
            </div>
            {siteConfig.business.name}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                color: "#985f47",
                display: "flex",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Stroud · Gloucestershire
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "serif",
                fontSize: 66,
                lineHeight: 1.08,
                maxWidth: 900,
              }}
            >
              Reliable landscaping, built around your garden.
            </div>
            <div
              style={{
                color: "#4a5248",
                display: "flex",
                fontSize: 26,
              }}
            >
              Landscaping · Patios · Fencing · Turfing · Garden maintenance
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
