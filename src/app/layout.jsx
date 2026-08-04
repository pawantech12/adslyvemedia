import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTopButton";
import LeadPopup from "@/components/LeadPopup";
import WhatsappButton from "@/components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "AdsLyve Media | Digital Marketing Agency",
    template: "%s | AdsLyve Media",
  },

  description:
    "AdsLyve Media helps businesses grow through SEO, Performance Marketing, Google Ads, Meta Ads, Digital Marketing, and ROI-focused growth strategies.",

  keywords: [
    "Digital Marketing",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Performance Marketing",
    "Lead Generation",
    "Brand Strategy",
    "AdsLyve Media",
  ],

  authors: [
    {
      name: "AdsLyve Media",
    },
  ],

  creator: "AdsLyve Media",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "AdsLyve Media",
    description:
      "Premium Digital Marketing Agency helping brands Engage, Optimize & Scale.",

    url: "https://adslyvemedia.com",

    siteName: "AdsLyve Media",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AdsLyve Media",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "AdsLyve Media",

    description: "SEO • Google Ads • Meta Ads • Performance Marketing",

    images: ["/images/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Navbar />

        <main>{children}</main>
        <WhatsappButton />
        {/* <ScrollToTop /> */}
        <LeadPopup />
        <Footer />
      </body>
    </html>
  );
}
