import type { Metadata } from "next";
import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const outfit = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = OvoFont({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Tushar Shitole | Portfolio",
  description:
    "Welcome to my portfolio. Showcasing my projects and skills in web development. Mern Stack Developer",
  icons: {
    icon: "/TS_logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${outfit.className} ${ovo.className} antialiased`}
    >
      <head>
        <link rel="canonical" href="https://tusharshitole.site/" />
        <link rel="icon" href="/TS_Logo.jpg" type="image/jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
