import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/sadhana-logo.jpg';
import sadhna from '../assets/Sadhana.jpg';

function Navbar() {
  const location = useLocation();

  return (
    <div className="flex justify-between mt-5 mx-8 items-center">
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
              <Link to="/home" className={`${location.pathname === '/home' ? 'text-[#008080]' : ''}`}>Home</Link>
            </li>
            <li>
              <Link to="/community" className={`${location.pathname === '/community' ? 'text-[#008080]' : ''}`}>Community</Link>
            </li>
            <li>
              <Link to="/events" className={`${location.pathname === '/events' ? 'text-[#008080]' : ''}`}>Events</Link>
            </li>
            <li>
              <Link to="/resources" className={`${location.pathname === '/resources' ? 'text-[#008080]' : ''}`}>Resources</Link>
            </li>
            <li>
              <Link to="/prayers" className={`${location.pathname === '/prayers' ? 'text-[#008080]' : ''}`}>Prayers</Link>
            </li>
            <li className="rounded-lg px-4 py-2 bg-[#FFA500] text-white font-bold">
              <Link to="/register">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
