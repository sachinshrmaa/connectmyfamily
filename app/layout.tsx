import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

export const metadata = {
  title: "Connect my Family",
  description:
    "A small open source project to connect familes trapped/affected by the Sikkim flood.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
