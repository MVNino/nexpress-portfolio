import { Inter } from "next/font/google";
import "@/app/cms.css";
import "@/app/mediaqueries.css";
import FooterCms from "@/components/FooterCms";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal Portfolio Website",
  description: "My professional portfolio website",
  keywords: "Portfolio Website, Portfolio, Website, Marlon, Marlon Nino, CMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <h1>Dashboard</h1>
        </div>
        <div className="sidebar">
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </div>
        <div className="content">
            { children }
        </div>
        <FooterCms />
      </body>
    </html>
  );
}
