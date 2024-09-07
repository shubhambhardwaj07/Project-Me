import { Footer, Header } from "../components";
import "./globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Shubham Bhardwaj</title>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
