import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

const fallbackSettings = {
  metaTitle: "AdsLyve Media | Digital Marketing Agency",
  metaDescription:
    "AdsLyve Media helps businesses grow through SEO, Performance Marketing, Google Ads, Meta Ads, Digital Marketing, and ROI-focused growth strategies.",
};

export async function generateMetadata() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/admin/settings`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch website settings");
    }

    const data = await response.json();

    const settings = data?.settings || fallbackSettings;

    const metaTitle = settings.metaTitle || fallbackSettings.metaTitle;
    const metaDescription =
      settings.metaDescription || fallbackSettings.metaDescription;

    return {
      title: {
        default: metaTitle,
        template: `%s | AdsLyve Media`,
      },

      description: metaDescription,

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
        title: metaTitle,
        description: metaDescription,
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
        title: metaTitle,
        description: metaDescription,
        images: ["/images/logo.png"],
      },

      robots: {
        index: true,
        follow: true,
      },
    };
  } catch (error) {
    console.error("FETCH SEO SETTINGS ERROR:", error);

    return {
      title: {
        default: fallbackSettings.metaTitle,
        template: "%s | AdsLyve Media",
      },
      description: fallbackSettings.metaDescription,
      robots: {
        index: true,
        follow: true,
      },
    };
  }
}

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

        <LeadPopup />

        <Footer />
      </body>
    </html>
  );
}
