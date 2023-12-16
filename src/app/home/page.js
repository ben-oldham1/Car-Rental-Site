import Hero from '../../components/Hero';
import ReviewCard from '../../components/ReviewCard';
import ReviewData from '../data/ReviewData.json';

export default function Page() {
  return (
    <div>

      <Hero />

      <section className='container-fluid max-width-container py-5'>
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



      <section className='container-fluid max-width-container py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>See our latest reviews</h1>
          </div>
        </div>

        <div className='row'>
          {ReviewData.map((review) => (
            <div className='col-sm-6 col-lg-3 mb-3' key={review.key}>
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Branches across the UK</h1>
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

    </div>
  )
}