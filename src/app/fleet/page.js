import Link from 'next/link';

import CarCard from '../components/CarCard';

import carData from '../data/CarModels.json';

export default function Page() {
    return (
        <div className='container max-width-container'>
            <div className='mt-4 mb-3'>
                <h1 className='text-center'>Our fleet</h1>
            </div>

            <div className='row'>
                {carData.map((car) => (
                    <div className='col-md-6 col-lg-4 mb-3' key={car.key}>
                        <CarCard car={car} />
                    </div>
                ))}
            </div>
        </div>
    )
}