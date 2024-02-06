
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
      <link rel="icon" href="/image/nitishlogo.png" />
    </html>
  );
}
