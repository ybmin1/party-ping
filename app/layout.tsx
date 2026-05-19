import "./globals.css";
import NavMenu from "@/components/NavMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
