import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "EventEase",
  description: "EventEase is a platform for event management",
  icons:{
    icon:'/assets/images/lodo.svg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
      {/* <Header/> */}
      <body className={poppins.variable}>{children}</body>
      {/* <Footer/> */}
      </ClerkProvider>
    </html>
  );
}
