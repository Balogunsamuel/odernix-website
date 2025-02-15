import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Nav from "@/component/nav/nav";
import Loading from "@/app/loading";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Odernix homes",
  description:
    "Transforming real estate through engineering, consultancy, and innovation.",
  openGraph: {
    title: "Odernix Homes",
    description:
      "Transforming real estate through engineering, consultancy, and innovation.",
    images: [
      {
        url: "/logo-s-dark.png", // Ensure this image is inside the `/public` folder
        width: 1200,
        height: 630,
        alt: "Odernix Homes Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odernix Homes",
    description:
      "Transforming real estate through engineering, consultancy, and innovation.",
    images: ["/logo.png"],
  },
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
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
