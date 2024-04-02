import React from "react";
import { Inter } from "next/font/google";
import "../../public/css/globals.css";
import "../../public/css/App.css";
import JoinedNavbar from "@/components/JoinedNavbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JoinedNavbar />
      <div className="Paralax-container">
        <div className={inter.className}>{children}</div>
        <Footer importerClassName={undefined} />
      </div>
    </>
  );
}
