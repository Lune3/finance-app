import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import {QueryProvider} from "@/providers/query-provider";
import { SheetProvider } from "@/providers/sheet-provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
import { Toaster } from "@/components/ui/sonner";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finance App",
  description: "Finance app to manage your Transactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <QueryProvider>
            <SheetProvider/>
            <Toaster></Toaster>
            {children}
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
