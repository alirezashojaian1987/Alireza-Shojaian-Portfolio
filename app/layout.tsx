import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alireza Shojaian",
  description: "Front-end Developer",
  icons:{
    icon:'/Favicon_logo2.png',
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}