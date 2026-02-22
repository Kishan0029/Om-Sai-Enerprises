import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { VisualEditsMessenger } from "orchids-visual-edits";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Om Sai Enterprises | Reliable Manpower Supply Services in Belagavi",
  description: "Contract-based skilled, semi-skilled & unskilled manpower supply for industries in Belagavi, Karnataka. 1,400+ active workforce. Fully PF/ESI/GST compliant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col industrial-grid">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="6257f277-0e3c-4892-8cba-be0fbf978a58"
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppCTA />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
