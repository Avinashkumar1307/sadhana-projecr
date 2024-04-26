import React from 'react'
import logo from '../assets/sadhana-logo.jpg'
import sadhna from '../assets/Sadhana.jpg'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className="flex justify-between mt-5 mx-8  items-center">
            <div className="flex items-center">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Logo" loading="lazy" className="mr-2" />
                    <img src={sadhna} alt="sadhana" loading="lazy" />
                </Link>
            </div>

            <div>
                <nav>
                    <ul className="flex space-x-6 items-center text-xl">
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/community">Community</Link>
                        </li>
                        <li>
                            <Link to="/events">Events</Link>
                        </li>
                        <li>
                            <Link to="/resources">Resources</Link>
                        </li>
                        <li>
                            <Link to="/prayers">Prayers</Link>
                        </li>
                        <li className="rounded-lg px-4 py-2 bg-[#FFA500] text-white font-bold">
                            <Link to="register">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Navbar
