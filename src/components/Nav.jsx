import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/logo.gif';
import '../assets/styles/nav.css';
import BurgerBtn from './BurgerBtn';

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked); //true -> false - false->true
  };
  return (
    <div className='navbar flexNav'>
      <div className='icon-cancun'>
        <img src={img} alt='' />
      </div>
      <div className={`navbarList ${clicked ? 'active' : ''} flexNav`}>
        <Link onClick={handleClick} className='navText' to='/'>
          INICIO
        </Link>
        <Link onClick={handleClick} className='navText' to='/about'>
          NOSOTROS
        </Link>
        <Link onClick={handleClick} className='navText' to='/services'>
          SERVICIOS
        </Link>
        <Link onClick={handleClick} className='navText' to='/blog'>
          BLOG
        </Link>
        <Link onClick={handleClick} className='navText' to='/team'>
          EQUIPO
        </Link>
        <Link onClick={handleClick} className='navText' to='/contact'>
          CONTACTO
        </Link>
        <a onClick={handleClick} className='navText' href=''>
          <i className='fa-regular fa-moon'></i>
        </a>
      </div>
      <div className='burguer'>
        <BurgerBtn clicked={clicked} handleClick={handleClick} />
      </div>
      <div className={`bgDiv ${clicked ? 'active' : ''} `} />
    </div>
  );
};

export default Nav;
