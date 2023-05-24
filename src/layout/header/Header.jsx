import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header.css';
import logo from '../../images/logo.png'; // Importez votre logo ici

function Nav() {
  const [showLinks, setShowlinks] = useState(false)

  const handleShowlinks = () => {
    setShowlinks(!showLinks)
  }

  return (
    <header>
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <div className='navbar_logo'>
        <img src={logo} alt="Logo" />
      </div>
      <ul className='navbar_links'>
      <li className='navbar_items slideInDown-1'>
          <Link to ="/">ACCUEIL</Link>
        </li>
        <li className='navbar_items slideInDown-1'>
          <Link to ="/menu">MENU</Link>
        </li>
        <li className='navbar_items slideInDown-1'>
          <Link to ="/reservation">RESERVATION</Link>
        </li>
        <li className='navbar_items slideInDown-1'>
          <Link to ="/noustrouver">NOUS TROUVER</Link>
        </li>
    
      </ul>
      <button className='navbar_burger' onClick={handleShowlinks}>
        <span className='burger-bar'></span>
      </button>
    </nav>      
    </header>

  );
}

export default Nav;
