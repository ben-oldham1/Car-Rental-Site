import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='container-fluid bg-white py-5'>
            <div className='row mx-5'>
                <div className='col-md-4'>
                    <h5>About</h5>
                    <Link href='/branches'>
                        <p>Branches</p>
                    </Link>
                    <Link href='/fleet'>
                        <p>Our fleet</p>
                    </Link>

                    <h5>Businesses</h5>
                    <p>Business solutions</p>
                    <p>Franchising</p>
                </div>
                <div className='col-md-4'>
                    <h5>Company</h5>
                    <p>Careers</p>
                    <p>Press</p>
                    <p>Reports & governance</p>
                    <p>Sustainability</p>
                </div>
                <div className='col-md-4'>
                    <h5>Car rental company</h5>
                    <p>
                        123 Made Up Street <br />
                        Imaginary Lane <br />
                        London <br />
                        AB1 CD12
                    </p>
                    <p>
                        <i className="bi bi-telephone"></i> 123-456-78910
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
