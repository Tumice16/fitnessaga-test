import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fitness Saga",
  description: "Your Fitness Journey, One Step at a Time",
  icons: {
    icon: "/favicon.ico", // or .png etc
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans text-[#1d1d1f] bg-white">{children}</body>
    </html>
  );
}
