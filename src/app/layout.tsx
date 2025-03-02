import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./{Components}/Navbar";

export const metadata: Metadata = {
  title: "Mirza Zain | Home Page",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="w-full h-full flex flex-col m-0 p-0 font-[FuturePT]">
          <Navbar />
        {children}
      </body>
    </html>
  );
}
