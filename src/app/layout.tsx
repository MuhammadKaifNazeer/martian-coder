import { Analytics } from "@vercel/analytics/react";
import { RootProvider } from "fumadocs-ui/provider";
import "katex/dist/katex.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import Footer from "@/components/footer";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex min-h-dvh flex-col">
        <RootProvider>
          <Analytics />
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
};

export default Layout;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title:
    "Matian Coder | Exploring the Universe of Web Development, Programming, and Tech Innovations",
  description:
    "Dive into the world of web development, coding tutorials, and the latest in tech innovations. Whether you're a beginner or an advanced developer, discover tips, tricks, and insights to elevate your coding skills. Join me on a journey to the future of programming!",
  keywords:
    "tech blog, coding tutorials, web development, programming, Martian Coder, tech insights",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title:
      "Matian Coder | Exploring the Universe of Web Development, Programming, and Tech Innovations",
    description:
      "Dive into the world of web development, coding tutorials, and the latest in tech innovations. Whether you're a beginner or an advanced developer, discover tips, tricks, and insights to elevate your coding skills. Join me on a journey to the future of programming!",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Martian Coder",
      },
    ],
    url: "https://martiancoder.vercel.app",
    type: "website",
  },
  twitter: {
    title:
      "Matian Coder | Exploring the Universe of Web Development, Programming, and Tech Innovations",
    description:
      "Dive into the world of web development, coding tutorials, and the latest in tech innovations. Whether you're a beginner or an advanced developer, discover tips, tricks, and insights to elevate your coding skills. Join me on a journey to the future of programming!",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Martian Coder",
      },
    ],
    card: "summary_large_image",
  },
};
