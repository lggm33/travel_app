import type { Metadata } from "next";
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel Page",
  description: "Travel UI/UX App for Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-7xl	mx-auto">
        <Navbar/>
        <main className="relative overflow-hidden	">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
