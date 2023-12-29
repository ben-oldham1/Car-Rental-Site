import "../styles/scss/custom.scss";
import "../styles/styles.css";

import 'bootstrap-icons/font/bootstrap-icons.css';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImportBsJs from "../components/ImportBsJs";

import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata = {
  title: 'Carmony | Ben Oldham Portfolio',
  description: 'Portfolio project for a fictional car rental company. Built using Next JS and styled with customised bootstrap.',
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

      <GoogleAnalytics gaId="G-2CBNQX9T3B" />

    </html>
  )
}
