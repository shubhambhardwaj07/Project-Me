import { Footer, Header } from "../components";
import Template from "./template.jsx";
import "./globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Shubham Bhardwaj</title>
      </head>
      <body>
        <Template>
          <Header />
          {children}
          <Footer />
        </Template>
      </body>
    </html>
  );
}
