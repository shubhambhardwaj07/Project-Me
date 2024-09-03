import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Shubham Bhardwaj</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
