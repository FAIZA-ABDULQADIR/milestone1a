import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import style from "../style/home.module.css"; // Use lowercase 'style' to match variable name

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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={style.sidebar}>
          <div className={style.icon}>
            <Link href="/">
              <Image src="/home logo.png" alt="Home" width={50} height={50} />
            </Link>
          </div>
          <div className={style.icon}>
            <Link href="/inspire">
              <Image src="/inspire5.png" alt="inspire5" width={50} height={50} />
            </Link>
          </div>
          <div className={style.icon}>
            <Link href="/profile">
              <Image src="/p10.webp" alt="Profile" width={50} height={50} />
            </Link>
          </div>
          <div className={style.icon}>
            <Link href="/project">
              <Image src="/pr3.png" alt="Projects" width={50} height={50} />
            </Link>
          </div>
          <div className={style.icon}>
            <Link href="/contact">
              <Image src="/contactnow.png" alt="Contact" width={50} height={50} />
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
