import "../styles/scss/custom.scss";
import "../styles/styles.css";

import 'bootstrap-icons/font/bootstrap-icons.css';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImportBsJs from "../components/ImportBsJs";

import Script from "next/script";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export const metadata = {
  title: 'Carmony | Ben Oldham Portfolio',
  description: 'Portfolio project for a fictional car rental company. Built using Next.js and styled with customised bootstrap.',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />

        <ImportBsJs />
      </body>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `}
      </Script>

    </html>
  )
}
