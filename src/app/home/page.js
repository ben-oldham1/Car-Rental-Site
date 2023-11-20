import Link from 'next/link';
import QuoteForm from '../components/QuoteForm';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

/*
      <div>
        <img src="hero-img.jpg" className="hero-img" alt="Winding road" />
      </div>

      <div className='container'>

        < QuoteForm />

      </div>
*/

export default function Page() {
  return (
    <div>

      <Hero />

      <section className='container-fluid py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Why do customers love us?</h1>
            <p>More filler text</p>
          </div>
        </div>

        <div className='row text-center'>
          <div className='col-md-4'>
            <img src="/icons/locations.png" className='img-fluid w-25 my-4' />
            <h4>Locations all over the UK</h4>
            <p>With branches in most major cities, we'll never be too far away.</p>
          </div>
          <div className='col-md-4'>
            <img src="/icons/car.png" className='img-fluid w-25 my-4' />
            <h4>Vehicles for everyone</h4>
            <p>Our selection of cars offer something for every need and budget.</p>
          </div>
          <div className='col-md-4'>
            <img src="/icons/cust-service.png" className='img-fluid w-25 my-4' />
            <h4>Customer service</h4>
            <p>We strive to make sure every customer receieves excellent service.</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <button className='btn btn-primary'>
              See our branches
            </button>
          </div>
        </div>

      </section>


      <section className='container-fluid py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Meet our fleet</h1>
            <p>More filler text</p>
          </div>
        </div>

        <div className='row text-center'>
          <div className='col-md-4'>
            <img src="/icons/locations.png" className='img-fluid w-25 my-4' />
            <h4>Locations all over the UK</h4>
            <p>With branches in most major cities, we'll never be too far away.</p>
          </div>
          <div className='col-md-4'>
            <img src="/icons/car.png" className='img-fluid w-25 my-4' />
            <h4>Vehicles for everyone</h4>
            <p>Our selection of cars offer something for every need and budget.</p>
          </div>
          <div className='col-md-4'>
            <img src="/icons/cust-service.png" className='img-fluid w-25 my-4' />
            <h4>Customer service</h4>
            <p>We strive to make sure every customer receieves excellent service.</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <button className='btn btn-primary'>
              See our branches
            </button>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  )
}