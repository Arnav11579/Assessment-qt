import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Will you be my Valentine?",
  description: "A special Valentine's Day question",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
