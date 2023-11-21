"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

function Navigation() {
    const pathname = usePathname()

    return (
        <nav className="navbar navbar-expand-lg py-0 bg-white">
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
                            <Link href="/home" className={`nav-link p-3 ${pathname === '/home' ? 'active' : ''}`}>
                                Instant quote
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/fleet" className={`nav-link p-3 ${pathname === '/fleet' ? 'active' : ''}`}>
                                Our fleet
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/branches" className={`nav-link p-3 ${pathname === '/branches' ? 'active' : ''}`}>
                                Branches
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className={`nav-link p-3 ${pathname === '/contact' ? 'active' : ''}`}>
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/reserve">
                                <button className='btn btn-primary'>
                                    Reserve
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;