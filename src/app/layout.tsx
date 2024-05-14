import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Molecules/Navbar";
import Footer from "@/components/Molecules/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PW Maharashtra",
  description: "Ongoing Batches for the Exam MHT-CET",
  icons :{
    icon: ['/favicon.ico?vm4'],
    apple:["/apple-touch-icon.png?vm4"],
    shortcut:['/apple-touch-icon.png?vm4']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
