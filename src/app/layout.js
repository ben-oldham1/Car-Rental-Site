import "../styles/scss/custom.scss";
import "../styles/styles.css";

import 'bootstrap-icons/font/bootstrap-icons.css';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImportBsJs from "../components/ImportBsJs";

import Script from "next/script";


export const metadata = {
  title: 'Carmony | Ben Oldham Portfolio',
  description: 'Portfolio project for a fictional car rental company. Built using Next JS and styled with customised bootstrap.',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2CBNQX9T3B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2CBNQX9T3B');
        `}
        </Script>

      </head>
      <body>
        <NavBar />
        {children}
        <Footer />

        <ImportBsJs />
      </body>
    </html>
  )
}
