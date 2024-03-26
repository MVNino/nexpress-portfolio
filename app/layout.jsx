import { Inter } from "next/font/google";
import "./globals.css";
import "./mediaqueries.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal Portfolio Website",
  description: "My professional portfolio website",
  keywords: "Portfolio Website, Portfolio, Website, Marlon, Marlon Nino",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
