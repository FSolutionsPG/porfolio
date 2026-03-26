import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800", "900"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://francisopachon.dev"),
  title: {
    default: "Francisco Pachón - Full-Stack Developer & Founder",
    template: "%s | Francisco Pachón",
  },
  description:
    "Full-Stack Developer, Founder & CTO of FSolutions PG. Specialized in Next.js, automation, and high-performance web solutions.",
  keywords:
    "full-stack developer, next.js, react, typescript, automation, web development, francisco pachón",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://francisopachon.dev",
    siteName: "Francisco Pachón - Developer",
    title: "Francisco Pachón - Full-Stack Developer & Founder",
    description:
      "Full-Stack Developer, Founder & CTO of FSolutions PG. Specialized in Next.js, automation, and high-performance web solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisco Pachón - Full-Stack Developer & Founder",
    description:
      "Full-Stack Developer, Founder & CTO of FSolutions PG. Specialized in Next.js, automation, and high-performance web solutions.",
    creator: "@FPachonGallardo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#0A192F" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${montserrat.variable} ${nunito.variable} font-body bg-primary text-text-dark antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
