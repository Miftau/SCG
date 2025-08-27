import { Cairo, Geist as GeistSans, Geist_Mono as GeistMono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import DisableRightClick from "./components/DisableRightClick"; // import wrapper

const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata = {
  title: "SCG",
  description: "SCG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased`}
      >
        <DisableRightClick>
          <Navbar />
          {children}
          <Footer />
        </DisableRightClick> 
      </body>
    </html>
  );
}
