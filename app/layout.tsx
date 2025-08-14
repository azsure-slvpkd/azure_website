import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import SignUp from "./components/signup";
import { Footer } from "./components/footer/Footer";
import NavBar from "./components/navbar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AzSure",
  description: "Stay Safe. Stay Compliant. Stay Sure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="AzSure" />
      </head>
      <body className={`${roboto.variable}  antialiased`}>
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <NavBar />
          {children}
          <footer className="bg-white pt-8">
            <SignUp />
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
