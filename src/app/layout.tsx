import localFont from "next/font/local";
import "./globals.css";

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
  keywords: ["adhd", "todo", "list", "help", "ADHDO", "ADHD"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="darkreader-lock"></meta>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('https://rare-gallery.com/uploads/posts/5377655-mountain-forest-moody-mist-fog-slope-ridge-landscape-layers-misty-foggy-landscape-nature-mood-forest-light-forest-mood-hillside-adventure-travel-explore-discover-free-images.jpg')] bg-fixed bg-cover bg-center`}
      >
        {children}
      </body>
    </html>
  );
}
