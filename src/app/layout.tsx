import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  icons: {
    icon: "/me1.png",
    apple: "/me1.png",
  },
  title: {
    default: `${DATA.name}`,
    template: `%s | ${DATA.name}`,
  },
  description: `${DATA.description} | ${DATA.summary}`,
  keywords:
    "software engineer, web developer, full stack developer, frontend developer, React developer, TypeScript, Next.js, portfolio, software development, programming",
  authors: [
    {
      name: "Gyanendra Prakash",
    },
  ],
  // openGraph: {
  //   title: `${DATA.name}`,
  //   description: DATA.description,
  //   images: ["/preview.png"],
  //   url: "",
  //   siteName: `${DATA.name}'s Portfolio`,
  //   locale: "en_US",
  //   type: "website",
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    images: [`${DATA.url}/preview.png`],
  },
  alternates: {
    canonical: `${DATA.url}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-4xl mx-auto py-12 sm:py-24",
          fontSans.variable
        )}
      >
        <TooltipProvider delayDuration={0}>
          {children}
          <Navbar />
          <Analytics />
        </TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
