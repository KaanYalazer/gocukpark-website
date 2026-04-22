import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Göçük Park | Boyasız Göçük Düzeltme & PDR",
  description:
    "Haramidere Beylikdüzü'nde profesyonel boyasız göçük düzeltme (PDR), dolu hasarı ve park hasarı onarımı. 1 yıl işçilik garantisi.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-on-background" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
