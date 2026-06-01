import type { Metadata } from "next";
import { Mona_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "SnagPost — Turn any Facebook profile into a spreadsheet.",
  description:
    "SnagPost is a Chrome extension that scrapes any Facebook profile in seconds. Likes, comments, shares, video plays, captions. Export to Claude, ChatGPT, or Excel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${monaSans.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="bg-white text-neutral-900 font-sans">{children}</body>
    </html>
  );
}
