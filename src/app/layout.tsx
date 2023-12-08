import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al-Deen",
  description: "An muslim app for muslims",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
