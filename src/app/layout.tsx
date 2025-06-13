import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: "HaloHati - Chatbot Empati",
  description: "Chatbot empati untuk mendengarkan curhatmu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${quicksand.variable}`}>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
