import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./{Components}/Navbar";
import Footer from "./{Components}/Footer";

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
      <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet"/>
      </head>
      <body className="w-full h-full flex flex-col m-0 p-0 font-[FuturePT]">
        <Navbar />
        <main className="w-full h-full flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}