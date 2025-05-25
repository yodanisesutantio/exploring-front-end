import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

// components
import Navbar from "./components/Navbar";

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextJS Tutorial 1",
  description: "A tutorial to understand NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
