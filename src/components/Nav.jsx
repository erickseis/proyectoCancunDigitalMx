import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/logo.gif';

import '../assets/styles/nav.css';

const Nav = () => {
  return (
    <nav className='navbar flexNav'>
      <div>
        <img src={img} alt='' />
      </div>
      <div className='navbarList flexNav'>
        <Link className='navText' to='/'>
          Inicio
        </Link>
        <Link className='navText' to='/about'>
          Nosotros
        </Link>
        <Link className='navText' to='/services'>
          Servicios
        </Link>
        <Link className='navText' to='/blog'>
          Blog
        </Link>
        <Link className='navText' to='/team'>
          Equipo
        </Link>
        <a className='navText' href=''>
          <i className='fa-regular fa-moon'></i>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
