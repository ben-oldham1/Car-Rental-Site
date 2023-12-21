import "../styles/scss/custom.scss";
import "../styles/styles.css";

import 'bootstrap-icons/font/bootstrap-icons.css';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImportBsJs from "../components/ImportBsJs";

import AnalyticsTag from "../components/AnalyticsTag";


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
        <AnalyticsTag />
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
