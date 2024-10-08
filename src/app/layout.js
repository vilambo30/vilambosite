import localFont from "next/font/local";
import { ThemeProvider } from "@/components/themeProvider";
import "./globals.css";
import Navbar from "./header/navbar";
import Footer from "./footer/footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Vilambo Private Limited",
    template: "%s | Vilambo",
  },
  description:
    "Vilambo crafts technology solutions that matter, offering human-centric AI and reverse recruiting services across industries for businesses and individuals.",
  keywords: [
    "Vilambo",
    "technology solutions",
    "AI",
    "artificial intelligence",
    "reverse recruiting",
    "job search",
    "innovation",
    "resume writing",
  ],
  authors: [{ name: "Vilambo Private Limited" }],
  creator: "Vilambo Private Limited",
  publisher: "Vilambo Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.vilambo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vilambo Private Limited",
    description:
      "Discover cutting-edge AI solutions and transformative recruiting services at Vilambo. We're crafting technology that matters for businesses and individuals alike.",
    url: "https://www.vilambo.com",
    siteName: "Vilambo",
    images: [
      {
        url: "https://www.vilambo.com/ogimage.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vilambo Private Limited",
    description:
      "Explore Vilambo's innovative AI and recruiting tech solutions. Empowering businesses and individuals with technology that makes a difference.",
    images: ["https://www.vilambo.com/ogimage.png"],
  },
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#3C4043",
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="dark:bg-[#3C4043]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vilambo",
              url: "https://www.vilambo.com",
              logo: "https://www.vilambo.com/logo.svg",
              description:
                "Vilambo: Empowering businesses with human-centered AI bots and revolutionizing job searches through our Recruform reverse recruiting service. Tech solutions that truly matter.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Nalgonda",
                addressLocality: "Nalgonda",
                addressRegion: "Telangana",
                postalCode: "508001",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8523031364",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.instagram.com/vilamboofficial/",
                "https://linkedin.com/company/vilambo-private-limited",
                "https://x.com/vilamboofficial",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
