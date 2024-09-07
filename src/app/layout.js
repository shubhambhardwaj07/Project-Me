import "./globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Shubham Bhardwaj</title>
      </head>
      <body>
        <header>Header</header>
        {children}
        <footer>All rights reserved @shubh</footer>
      </body>
    </html>
  );
}
