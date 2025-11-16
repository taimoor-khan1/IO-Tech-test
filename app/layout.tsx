import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "../lib/StoreProvider";
import IntlProvider from "../lib/IntlProvider";
import enMessages from "../messages/en.json";
import arMessages from "../messages/ar.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Legal Services",
  description: "Professional legal services",
};

const messages = {
  en: enMessages,
  ar: arMessages,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <IntlProvider messages={messages}>
            {children}
          </IntlProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
