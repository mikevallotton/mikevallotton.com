import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MotionSystem from "../components/MotionSystem";
import PageAtmosphere from "../components/PageAtmosphere";
import AnalyticsConsent from "../components/AnalyticsConsent";
import { siteConfig } from "../content/siteConfig";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: "%s | Mike Vallotton",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: `${siteConfig.siteUrl}/about` }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: siteConfig.category,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} headshot and site title`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.socialHandle,
    images: [siteConfig.twitterImage],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/headshot.jpg", type: "image/jpeg" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <meta name="theme-color" content="#DDE3DA" />
      </head>
      <body className="font-sans">
        <Header />
        <main className="container-page py-12">
          <PageAtmosphere />
          {children}
        </main>
        <Footer />
        <AnalyticsConsent measurementId={process.env.NEXT_PUBLIC_GA_ID} />
        <MotionSystem />
      </body>
    </html>
  );
}

