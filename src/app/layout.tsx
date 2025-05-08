import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'PDF旋转工具 - 本地安全处理PDF文件',
  description: '免费在线旋转PDF文件，无需上传，本地处理保障隐私安全。支持批量页面旋转，实时预览，简单易用。',
  keywords: ['PDF旋转', '本地PDF处理', '在线PDF工具', '隐私安全PDF工具','旋转PDF页面'],
  openGraph: {
    title: 'PDF旋转工具',
    description: '免费在线旋转PDF文件，无需上传，本地处理保障隐私安全。支持批量页面旋转，实时预览，简单易用。',
    url: 'https://ai-pdf-rotate.vercel.app',
    siteName: 'PDF.ai',
    images: [
      {
        url: '/pdf-ai.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF旋转工具',
    description: '免费在线旋转PDF文件',
    images: ['/pdf-ai.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster />
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
