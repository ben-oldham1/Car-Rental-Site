import React from 'react';
import Link from 'next/link';

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
                <Link href="/home" className="navbar-brand">
                    Car rent name
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/home" className="nav-link active">
                                Instant quote
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/fleet" className="nav-link">
                                Our fleet
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/branches" className="nav-link">
                                Branches
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;