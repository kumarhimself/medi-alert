import React from "react";
import { Manrope } from "next/font/google";
import "../../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fontHeading = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata = {
  title: "Medical Scribe AI",
  description:
    "An assistant that assists doctors and nurses in identifying diagnosis and alerting to potential dangers.",
};

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={(fontHeading.variable, fontBody.variable)}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
