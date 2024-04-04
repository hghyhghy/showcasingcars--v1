import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover The Best Cars of The Timeline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
         </body>
    </html>
  );
}
