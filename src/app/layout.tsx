import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
export const metadata: Metadata = {
  title: "Penaverse",
  description: "Penaverse Dao App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-screen-xl mx-auto px-4">
<Navbar/>
        {children}</body>
    </html>
  );
}
