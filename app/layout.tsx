import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ui/ThemeProvider";
import TopBar from "@/components/layout/TopBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danilo Pelin",
  description: "Danilo Pelin's personal web portfolio",
  icons: {
    icon:"favicon.svg",
    shortcut: "favicon.svg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex flex-col w-full h-full min-h-full items-center">
        <ThemeProvider>
          <div className="grid grid-cols-[0_1fr_0] lg:grid-cols-[200px_1fr_200px] 2xl:grid-cols-[350px_1fr_350px] w-full h-full">
            <div/>
            <div className="flex flex-col w-full h-full">
              <TopBar/>
              {children}
            </div>
            <div/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
