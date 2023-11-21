"use client"

import { useSearchParams } from 'next/navigation'
import ReservationForm from '../components/ReservationForm';

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
      <div className='row'>
        <div className='col-12'>
          <h1>Reservation Form</h1>
          <ReservationForm initialValues={initialValues} />
        </div>
      </div>
    </div>
  );
};

export default Reservations;

