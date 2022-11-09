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
    <div className={`navbar ${clicked ? 'active' : ''} flexNav`}>
      <div className='icon-cancun'>
        <img src={img} alt='' />
      </div>

      <div className={`navbarList ${clicked ? 'active' : ''} `}>
        <ul class='nav'>
          <li>
            <Link onClick={handleClick} className='navText' to='/'>
              INICIO
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} className='navText' to='/about'>
              NOSOTROS
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} className='navText' to='/services'>
              SOLUCIONES
            </Link>
            <ul>
              <li>
                <Link to='/webPosition'>POSICIONAMIENTO WEB</Link>
              </li>
              <li>
                <Link to='/social'>SOCIAL ADS</Link>
              </li>
              <li>
                <Link to='/creative'>CONTENIDO CREATIVO</Link>
              </li>
              <li>
                <Link to='/networSocials'>GESTION REDES SOCIALES</Link>
              </li>
              <li>
                <Link to='/graphics'>DISEÑO</Link>
              </li>
              <li>
                <Link to='/email'>EMAIL MARKETING</Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              // onClick={handleClick}
              className='navText'
              href='https://cancundigital.com.mx/blog/'
            >
              BLOG
            </a>
          </li>
          <li>
            <Link onClick={handleClick} className='navText' to='/team'>
              EQUIPO
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} className='navText' to='/contactus'>
              CONTACTO
            </Link>
          </li>
          <li>
            <a onClick={handleClick} className='navText' href=''>
              <i className='fa-regular fa-moon'></i>
            </a>
          </li>
        </ul>
      </div>

      {/* <div className={`navbarList ${clicked ? 'active' : ''} flexNav`}>
        <Link onClick={handleClick} className='navText' to='/'>
          INICIO
        </Link>
        <Link onClick={handleClick} className='navText' to='/about'>
          NOSOTROS
        </Link>
        <Link onClick={handleClick} className='navText' to='/services'>
          SOLUCIONES
          <ul>
            <li>asdipoj</li>
            <li>wefn</li>
            <li>qwidhdwhiodhq</li>
          </ul>
        </Link>
        <Link onClick={handleClick} className='navText' to='/blog'>
          BLOG
        </Link>
        <Link onClick={handleClick} className='navText' to='/team'>
          EQUIPO
        </Link>
        <Link onClick={handleClick} className='navText' to='/contactus'>
          CONTACTO
        </Link>
        <a onClick={handleClick} className='navText' href=''>
          <i className='fa-regular fa-moon'></i>
        </a>
      </div> */}
      <div className='burguer'>
        <BurgerBtn clicked={clicked} handleClick={handleClick} />
      </div>
      <div className={`bgDiv ${clicked ? 'active' : ''} `} />
    </div>
  );
};

export default Nav;
