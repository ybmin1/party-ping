import "./globals.css";
import NavMenu from "@/components/NavMenu";

import { Madimi_One, Lacquer } from "next/font/google";

const madimiOne = Madimi_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-madimi-custom",
});

const lacquer = Lacquer({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lacquer-custom",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${madimiOne.variable} ${lacquer.variable}`}>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
