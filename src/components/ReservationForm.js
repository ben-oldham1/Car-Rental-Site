"use client"

import { useState } from 'react';
import branchData from '../data/Branches.json';

const ReservationForm = ({ initialValues, cardTitle }) => {
    const [formData, setFormData] = useState(initialValues || {});
    const [reservation, setReservation] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setReservation(true);
    };

    const newReservation = () => {
        setReservation(null);
    }

    return (
        <section className='card py-2'>
            <div className='card-body'>
                {reservation == null ?
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <h1 className='text-center mb-4'>{cardTitle}</h1>
                        </div>

                        <div className='row'>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="start" className="form-label">Start Location*</label>
                                <select
                                    className="form-select"
                                    id="start"
                                    name="start"
                                    value={formData.start}
                                    onChange={handleChange}
                                    required={true}
                                >
                                    <option value='' disabled={true}>
                                        Select a branch
                                    </option>

                                    {branchData.map((branch) => (
                                        <option key={branch.key} value={branch.name} selected={branch.name == formData.start ? true : false}>
                                            {branch.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="end" className="form-label">End Location*</label>
                                <select
                                    className="form-select"
                                    id="end"
                                    name="end"
                                    value={formData.end}
                                    onChange={handleChange}
                                    required={true}
                                >
                                    <option value='' disabled={true}>
                                        Select a branch
                                    </option>

                                    {branchData.map((branch) => (
                                        <option key={branch.key} value={branch.name} selected={branch.name == formData.end ? true : false}>
                                            {branch.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className='row'>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="pickup" className="form-label">Pickup Date*</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="pickup"
                                    name="pickup"
                                    value={formData.pickup}
                                    onChange={handleChange}
                                    required={true}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="drop" className="form-label">Return Date*</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="drop"
                                    name="drop"
                                    value={formData.drop}
                                    onChange={handleChange}
                                    required={true}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="car" className="form-label">Car ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="car"
                                    name="car"
                                    value={formData.car}
                                    onChange={handleChange}
                                    required={false}
                                />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-12 mb-3'>
                                <label htmlFor='note'>Booking note</label>
                                <textarea
                                    className="form-control"
                                    rows="2"
                                    id='note'
                                    name='note'
                                    onChange={handleChange}
                                    required={false}
                                ></textarea>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-12 mb-3'>
                                <div className="col-12 mb-3">
                                    <label htmlFor="email" className="form-label">Your email*</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        required={true}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-12 mb-3'>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                    :
                    <div className="row text-center">
                        <div className="col-12">
                            <h2 className='mb-4'>
                                <i className="bi bi-check2-circle"></i> Your reservation has been received
                            </h2>

                            <p>Well, not actually, since this isn't a real company. Please contact me if you want to find out more about my work!</p>

                            <button className="btn btn-outline-primary me-2" onClick={newReservation}>
                                Edit reservation
                            </button>

                            <button className="btn btn-primary">
                                Back to my portfolio
                            </button>

                        </div>
                    </div>
                }
            </div>
        </section >
    );
};

export default ReservationForm;