import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Deteksi Penyakit Daun Padi",
  description: "Sistem Deteksi Penyakit Daun Padi Berbasis AI",
  keywords:
    "deteksi penyakit padi, AI pertanian, deep learning, VGG16, diagnosa tanaman",
  authors: [{ name: "Ryan Arkhan" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans bg-background text-foreground antialiased`}>
        {children}
        <Toaster richColors position="top-right" className="toaster" />
      </body>
    </html>
  );
}
