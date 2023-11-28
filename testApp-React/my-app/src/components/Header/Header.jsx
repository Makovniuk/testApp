import React from 'react';
import { PiWavesDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <Link className="logo" to='/home'>MY <span style={{ color: 'red', marginBottom: '20px' }}>MIX   <PiWavesDuotone /></span></Link>
      <nav className="nav">
        <ul className="menu">
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/my_mix'>My mix</Link></li>
          <li><Link to='/my_sound'>My Sound</Link></li>
          <li><Link to='/login'>Log In</Link></li>
        </ul>
      </nav>
    </header>
  );
}
