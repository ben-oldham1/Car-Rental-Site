import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import "./styles.css";
import Link from 'next/link';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <ul>
          <li><Link className="nav-link active" href="/home">Instant quote</Link></li>
          <li><Link className="nav-link" href="/cars">Cars</Link></li>
          <li><Link className="nav-link" href="/branches">Branches</Link></li>
          <li><Link className="nav-link" href="/contact">Contact</Link></li>
        </ul>
      </nav>

      {children}

      <footer className="bg-dark">
        <div className="container py-5">
          <div className="row">

            <div className="col-md-6">
              footer content
            </div>

            <div className="col-md-6">
              footer content
            </div>

          </div>
        </div>
      </footer>
    </section>
  )
}
