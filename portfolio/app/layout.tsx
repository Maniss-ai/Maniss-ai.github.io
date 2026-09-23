import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manish Soni — Backend & Reliability Engineer",
  description: "Software engineer in Bengaluru building scalable backends, reliable payments, and useful automation. Explore work at Razorpay, PocketFM and Increff.",
  openGraph: { title: "Manish Soni — Backend & Reliability Engineer", description: "Reliable systems. Thoughtful engineering. Selected projects, experience, and ways to connect with Manish Soni.", type: "website" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
