"use client";

import React, { useState } from 'react';

export default function QuoteForm() {
    const [startLocation, setStartLocation] = useState('London');
    const [duration, setDuration] = useState(1);
    const [endLocation, setEndLocation] = useState('London');
    const [carType, setCarType] = useState('Regular');
    const [price, setPrice] = useState(null);

    const calculatePrice = () => {
        const calculatedPrice = 100 + duration * 50; // Example pricing logic
        setPrice(calculatedPrice);
    };

    const newQuote = () => {
        setPrice(null);
    };

    return (
        <div className="card hero-card my-5 py-2 mx-5">
            <div className="card-body">

                <div>
                    {price == null ?
                        <div className="row">
                            <div className="col-12 text-center mb-3">
                                <h2>Find your next rental</h2>
                            </div>

                            <div className="col-lg-3">
                                <label htmlFor="start-loc">Pickup location</label>
                                <select
                                    name="start-loc"
                                    id="start-loc"
                                    className="form-select"
                                    value={startLocation}
                                    onChange={(e) => setStartLocation(e.target.value)}
                                >
                                    <option value="London" key="1">London</option>
                                    <option value="Bristol" key="2">Bristol</option>
                                    <option value="Exeter" key="3">Exeter</option>
                                    <option value="Manchester" key="4">Manchester</option>
                                    <option value="Birmingham" key="5">Birmingham</option>
                                    <option value="Leeds" key="6">Leeds</option>
                                    <option value="Newcastle" key="7">Newcastle</option>
                                    <option value="Bournemouth" key="8">Bournemouth</option>
                                </select>
                            </div>

                            <div className="col-lg-2">
                                <label htmlFor="duration">Rental duration (days)</label>
                                <input
                                    name="duration"
                                    id="duration"
                                    className="form-control"
                                    type="number"
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                />
                            </div>

                            <div className="col-lg-3">
                                <label htmlFor="end-loc">Drop-off location</label>
                                <select
                                    name="end-loc"
                                    id="end-loc"
                                    className="form-select"
                                    value={endLocation}
                                    onChange={(e) => setEndLocation(e.target.value)}
                                >
                                    <option value="London" key="1">London</option>
                                    <option value="Bristol" key="2">Bristol</option>
                                    <option value="Exeter" key="3">Exeter</option>
                                    <option value="Manchester" key="4">Manchester</option>
                                    <option value="Birmingham" key="5">Birmingham</option>
                                    <option value="Leeds" key="6">Leeds</option>
                                    <option value="Newcastle" key="7">Newcastle</option>
                                    <option value="Bournemouth" key="8">Bournemouth</option>
                                </select>
                            </div>

                            <div className="col-lg-2">
                                <label htmlFor="car-type">Car type</label>
                                <select
                                    name="car-type"
                                    id="car-type"
                                    className="form-select"
                                    value={carType}
                                    onChange={(e) => setCarType(e.target.value)}
                                >
                                    <option value="Value" key="1">Value</option>
                                    <option value="Regular" key="2">Regular</option>
                                    <option value="Premium" key="3">Premium</option>
                                </select>
                            </div>

                            <div className="col-lg-2">
                                <button className="btn btn-primary w-100 mt-4" onClick={calculatePrice}>
                                    Get Price
                                </button>
                            </div>
                        </div>
                        :
                        <div className="row">
                            <div className="col-12">
                                <h2>
                                    <i class="bi bi-check2-circle"></i> Your {duration} day trip from {startLocation} {startLocation != endLocation && "to " + endLocation}
                                </h2>
                                <p>Estimated cost is only £{price}</p>

                                <button className="btn btn-primary" onClick={newQuote}>
                                    Get a new estimate
                                </button>
                            </div>
                        </div>
                    }
                </div>

            </div>
        </div >
    );
}