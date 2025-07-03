import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: "QuickCart - GreatStack",
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
