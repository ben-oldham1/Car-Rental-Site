import Link from 'next/link';

import CarCard from '../components/CarCard';

import carData from '../data/CarModels.json';

export default function Page() {
    return (
        <div className='container'>
            <h1>Our fleet</h1>

            <div className='row'>
                {carData.map((car) => (
                    <div className='col-md-6 col-lg-4 mb-3'>
                        <CarCard key={car.key} car={car} />
                    </div>
                ))}
            </div>
        </div>
    )
}