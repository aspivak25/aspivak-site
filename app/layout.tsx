import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aspivak.com"),
  title: "Aaron Spivak — $0 to $48 Million in 48 Months",
  description:
    "Founder of Hush ($48M exit), founder of Founders Club, investor and speaker. Weekly insights on starting, scaling, and succeeding — founder to founder.",
  openGraph: {
    title: "Aaron Spivak — $0 to $48 Million in 48 Months",
    description:
      "Founder of Hush ($48M exit), founder of Founders Club, investor and speaker. Join the Founder to Founder weekly letter.",
    url: "https://aspivak.com",
    siteName: "Aaron Spivak",
    images: [{ url: "/images/hero-stage.jpg", width: 1400, height: 1705 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron Spivak — $0 to $48 Million in 48 Months",
    description:
      "Founder of Hush ($48M exit), founder of Founders Club, investor and speaker.",
    images: ["/images/hero-stage.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Archivo:wght@300;400;500;600&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
