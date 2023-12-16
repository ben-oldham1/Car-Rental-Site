import { useState } from 'react';
import branchData from '../data/Branches.json';

const ReservationForm = ({ initialValues }) => {
    const [formData, setFormData] = useState(initialValues || {});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to server, etc.)
        console.log('Form submitted with data:', formData);
    };

    return (
        <section className='card'>
            <div className='card-body'>

                <h2 className='text-center mb-4'>Reserve online</h2>

                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="start" className="form-label">Start Location</label>
                            <select
                                className="form-select"
                                id="start"
                                name="start"
                                value={formData.start}
                                onChange={handleChange}
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
                            <label htmlFor="end" className="form-label">End Location</label>
                            <select
                                className="form-select"
                                id="end"
                                name="end"
                                value={formData.end}
                                onChange={handleChange}
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
                            <label htmlFor="pickup" className="form-label">Pickup Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="pickup"
                                name="pickup"
                                value={formData.pickup}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="drop" className="form-label">Drop Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="drop"
                                name="drop"
                                value={formData.drop}
                                onChange={handleChange}
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
                            ></textarea>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 mb-3'>
                            <div className="col-12 mb-3">
                                <label htmlFor="email" className="form-label">Your email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
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

            </div>
        </section>
    );
};

export default ReservationForm;