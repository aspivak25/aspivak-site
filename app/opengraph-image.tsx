import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Aaron Spivak: $0 to $48 million in 48 months.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fontDir = join(process.cwd(), "app", "fonts");
  const [serif, serifItalic] = await Promise.all([
    readFile(join(fontDir, "CormorantGaramond-SemiBold.ttf")),
    readFile(join(fontDir, "CormorantGaramond-MediumItalic.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#15261D",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 10,
            color: "#CC986D",
          }}
        >
          OFFICIAL SITE OF
        </div>
        <div
          style={{
            fontFamily: "Cormorant Garamond",
            fontWeight: 600,
            fontStyle: "normal",
            fontSize: 96,
            color: "#F5EDDB",
            marginTop: 28,
          }}
        >
          Aaron Spivak
        </div>
        <div
          style={{
            fontFamily: "Cormorant Garamond",
            fontWeight: 500,
            fontSize: 40,
            fontStyle: "italic",
            color: "#CC986D",
            marginTop: 24,
          }}
        >
          $0 to $48 million in 48 months.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cormorant Garamond",
          data: serif,
          weight: 600,
          style: "normal",
        },
        {
          name: "Cormorant Garamond",
          data: serifItalic,
          weight: 500,
          style: "italic",
        },
      ],
    },
  );
}
