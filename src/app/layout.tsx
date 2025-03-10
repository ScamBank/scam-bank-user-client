import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./(components)/Header";

const inter = Inter({
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Скам Банк",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased bg-company-bg`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
