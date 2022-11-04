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
          INICIO
        </Link>
        <Link className='navText' to='/about'>
          NOSOTROS
        </Link>
        <Link className='navText' to='/services'>
          SERVICIOS
        </Link>
        <Link className='navText' to='/blog'>
          BLOG
        </Link>
        <Link className='navText' to='/team'>
          EQUIPO
        </Link>
        <a className='navText' href=''>
          <i className='fa-regular fa-moon'></i>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
