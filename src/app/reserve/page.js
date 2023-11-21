"use client"

import { useSearchParams } from 'next/navigation'
import ReservationForm from '../components/ReservationForm';
import Link from 'next/link';

const Reservations = () => {

  const searchParams = useSearchParams()
  const start = searchParams.get('start') || ''
  const end = searchParams.get('end') || ''
  const pickup = searchParams.get('pickup') || ''
  const drop = searchParams.get('drop') || ''
  const car = searchParams.get('car') || ''

  console.log(start)

  const initialValues = {
    start: start,
    end: end,
    pickup: pickup,
    drop: drop,
    car: car,
  };

  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-12'>
          <h1>Make a reservation</h1>
          <p>
            Ready to embark on your next adventure? Making a reservation with us is a simple, hassle-free process. Select from our array of vehicles, choose your desired pick-up and drop-off locations, and your rental period.
          </p>
          <p>
            Although securing the perfect vehicle for your journey is just a few clicks away with our online form, you're welcome to <Link href={'/contact'}>contact a branch</Link> if you need help making a reservation, or have specific requirements.
          </p>
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col-12'>
          <h3>The reservation process</h3>
        </div>
      </div>

      <div className='row text-center mt-3'>
        <div className='col-md-4'>
          <img src="/icons/contact-form.png" className='img-fluid w-25 my-4' />
          <h4>Submit a reservation online</h4>
          <p>Complete the form below and it'll be sent to your pickup branch to confirm availability.</p>
        </div>
        <div className='col-md-4'>
          <img src="/icons/payment.png" className='img-fluid w-25 my-4' />
          <h4>Pay the deposit</h4>
          <p>The pickup branch you've selected will email you to confirm your reservation. They will also send a secure link for you to pay the deposit.</p>
        </div>
        <div className='col-md-4'>
          <img src="/icons/complete.png" className='img-fluid w-25 my-4' />
          <h4>Your car is reserved!</h4>
          <p>Once the deposit is paid, your car will be reserved, ready for collection on your pick-up date.</p>
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col-12'>
          <h3>Reserve online</h3>
        </div>
      </div>

      <div className='row my-3'>
        <div className='col-12'>
          <ReservationForm initialValues={initialValues} />
        </div>
      </div>

    </div>
  );
};

export default Reservations;

