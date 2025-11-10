import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";  // navbar component import
import Footer from "@/components/Footer";  // ✅ adjust the path based on your folder structure

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RohTech",
  description: "Innovative Tech Solutions for Modern Businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Navbar visible on all pages */}
        <Navbar />

        {/* ✅ Main page content */}
        <main>{children}</main>

        {/* ✅ Footer visible on all pages */}
        <Footer />
      </body>
    </html>
  );
}
