import { AppProvider } from "@/contexts/AppContext";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: "Quick Cart - Loic Duong",
  description: "E-Commerce with Next.js ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased text-gray-700`}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
