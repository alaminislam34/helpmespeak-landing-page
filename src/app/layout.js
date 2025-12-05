import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";

export const metadata = {
  title: "HelpMeSpeak",
  description:
    "Learn languages with real-time Translations & AI Chat (reads more naturally in English)",
  icons: {
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "HelpMeSpeak",
    description:
      "Learn languages with real-time Translations & AI Chat (reads more naturally in English)",
    images: [
      {
        url: "/icons/logo.png",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
        <ToastContainer position="top-right" autoClose={1500} />
      </body>
    </html>
  );
}
