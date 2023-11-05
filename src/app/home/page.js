import Link from 'next/link';
import QuoteForm from '../components/QuoteForm';

export default function Page() {
  return (
    <div>

      <div>
        <img src="hero-img.jpg" className="hero-img" alt="Winding road" />
      </div>

      <div className='container'>

        < QuoteForm />

      </div>

      <h1>
        Home page! Go to <Link href="/contact">about</Link>
      </h1>
    </div>
  )
}