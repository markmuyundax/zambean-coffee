import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar, Footer, MobileOrderButton } from "@/components/shared";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";
import { LocalBusinessJsonLd as JsonLd } from "@/components/shared/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zambeancoffeeco.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zambean Coffee Co. — Lusaka's Garden Café",
    template: "%s | Zambean Coffee Co.",
  },
  description:
    "Lusaka's hidden garden café. Specialty coffee, fresh food, antique shop, and dog-friendly vibes. Ranked top 10 of 175 restaurants on TripAdvisor.",
  keywords: ["coffee", "café", "Lusaka", "Zambia", "breakfast", "lunch", "garden café", "specialty coffee", "coffee beans"],
  icons: {
    icon: "/images/favicon.svg",
  },
  openGraph: {
    title: "Zambean Coffee Co. — Lusaka's Garden Café",
    description: "Specialty coffee, fresh food, beautiful gardens, and an antique shop in the heart of Lusaka.",
    type: "website",
    siteName: "Zambean Coffee Co.",
    locale: "en_ZM",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Zambean Coffee Co. — Garden Café & Antique Shop in Lusaka",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-display" suppressHydrationWarning>
      <body className="font-body bg-cream-50 dark:bg-espresso-950 text-espresso-900 dark:text-cream-100 min-h-screen flex flex-col">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileOrderButton />
        <GoogleAnalytics measurementId="" />
      </body>
    </html>
  );
}
