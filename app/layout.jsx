import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import DisableRightClick from "./components/DisableRightClick";
import { TranslatorProvider } from "./context/TranslatorContext";

const cairo = Cairo({
  subsets: ["arabic", "latin"], // you can also add "arabic" if needed
  weight: "400", // Regular
});

export const metadata = {
  title: "SCG",
  description: "SCG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body
        className={cairo.className}
      >
        <TranslatorProvider>
        <DisableRightClick>
          <Navbar />
          {children}
          <Footer />
        </DisableRightClick> 
        </TranslatorProvider>
      </body>
    </html>
  );
}

