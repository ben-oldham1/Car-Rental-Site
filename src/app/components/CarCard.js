import React from 'react';
import Link from 'next/link';

function CarCard(props) {

    const imgname = props.car.imgname;

    const key = props.car.key;
    const make = props.car.make;
    const model = props.car.model;
    const premium = props.car.premium;
    const pplCapacity = props.car.pplCapacity;
    const fuel = props.car.fuel;
    const description = props.car.description;

    return (
        <section className='car-card h-100 card'>

            <div className='card-body'>

                <div className='row'>
                    <div className='col-12'>
                        <img src={"cars/" + imgname} className='car-img mx-auto' alt="Image of car" />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <h3>
                            {make} {model}
                        </h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <p>
                            <i class="bi bi-people"></i> {pplCapacity}
                        </p>
                    </div>
                    <div className='col-md-4'>
                        <p>
                            <i class="bi bi-fuel-pump"></i> {fuel}
                        </p>
                    </div>
                    <div className='col-md-4'>
                        <p>
                            {premium && <span class="badge rounded-pill  bg-secondary">Premium</span>}
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        {description && description}
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>
                        <Link
                            href={{
                                pathname: '/reserve',
                                query: {
                                    car: key,
                                },
                            }}
                        >
                            <button className='btn btn-outline-primary'>
                                Reserve me
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default CarCard;