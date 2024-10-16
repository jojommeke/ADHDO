import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ADHDO",
  description: "A todo app aiming to motivate people with ADHD ",
  keywords: ["adhd", "todo", "list", "help", "ADHDO", "ADHD"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="darkreader-lock"></meta>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[url('bg.jpg')] bg-cover bg-fixed bg-center antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
