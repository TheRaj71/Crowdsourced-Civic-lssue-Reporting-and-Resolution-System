import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { AdminProviders } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin | Smart India Hackathon",
  description: "Admin | Smart India Hackathon",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <AdminProviders>{children}</AdminProviders>
    </div>
  );
}
