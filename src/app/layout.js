import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { Suspense } from "react";

//import loader
import ScatterBoxLoader from "./components/Scatterboxloader";
export const ScatterBoxLoaderComponent = () => {
  return (
    <>
      <ScatterBoxLoader
        primaryColor={"#6366F1"}
        background={theme.colors["background"]}
      />
    </>
  );
};

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
        <meta name="darkreader-lock" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="0Qpz-Oyol3QXGVFIJ8ddxtbqxqIouEO7JZ8ZinxXux4"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <Suspense fallback={<ScatterBoxLoader />}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} portrait:scale-200 bg-[url('bg.jpg')] bg-cover bg-fixed bg-center antialiased`}
        >
          {children}
        </body>
      </Suspense>
    </html>
  );
}
