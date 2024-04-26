import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import ConvexClientProvider from "./ConvexClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fileify Storage",
  description: "A multi-file storage application like google drive, which works on role based model",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <ConvexClientProvider>
        {children}
      </ConvexClientProvider>
    </body>
  </html>
  );
}
