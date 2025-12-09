import type { Metadata } from "next";
import { Manrope, IBM_Plex_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const ibmPlex = IBM_Plex_Serif({ 
  weight: ['400', '600'], 
  subsets: ["latin"], 
  variable: "--font-ibm-plex" 
});
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "KTern Design System",
  description: "Arctic Horizon Version 1.5.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${ibmPlex.variable} ${jetbrains.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}