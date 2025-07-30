import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Nav from "@/component/nav/nav";
import Footer from "@/component/footer/footer";
import "react-multi-carousel/lib/styles.css";
import Loading from "@/app/loading";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About Odernix ",
  description: "Odernix about page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      <Nav
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          marginTop: "8px",
        }}
      />

      {children}
      <Footer />
    </div>
  );
}
