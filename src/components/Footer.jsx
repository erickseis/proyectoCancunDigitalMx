import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/footer.css';
import imagen from '../assets/images/logo.gif';
import imgInstagram from '../assets/images/instagram-logo.png';
import imgFacebook from '../assets/images/facebook-logo-3-1.png';
import imgTwitter from '../assets/images/twitter-icon.png';
import imgLinkdin from '../assets/images/LinkedIn_icon.png';
const Footer = () => {
  return (
    <div className='footer-contain'>
      <footer className='footer'>
        <div className='footer-child grid-container'>
          <div className='grid-child logo-cancun'>
            <p className='aling-left'>
              <img src={imagen} alt='' />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              consectetur dolor nesciunt facere,
            </p>
          </div>
          <div className='grid-child'>
            <ul className='list-contain access-direct'>
              <li>
                <Link className='li' to='/'>
                  Inicio
                </Link>
              </li>
              <li>
                <Link className='li' to='/about'>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link className='li' to='/'>
                  Posicionamiento Web
                </Link>
              </li>
              <li>
                <Link className='li' to='/'>
                  Social ads
                </Link>
              </li>
              <li>
                <Link className='li' to='/'>
                  {' '}
                  Contenido creativo
                </Link>
              </li>
              <li>
                <Link className='li' to='/'>
                  Gestion redes sociales
                </Link>
              </li>
              <li>
                <Link className='li' to='/'>
                  Diseño
                </Link>
              </li>
              <li>
                <Link className='li' to='/'>
                  Email marketing
                </Link>
              </li>
            </ul>
          </div>
          <div className='grid-child'>
            <ul className='list-contain success-stories'>
              <li>
                <Link className='li' to='/'>
                  Casos de exito
                </Link>
              </li>
              <li>
                <Link className='li' to='/'>
                  Clientes
                </Link>
              </li>
            </ul>
          </div>
          <div className='grid-child'>
            <ul className='list-contain'>
              <li>
                <Link className='li' to='/blog'>
                  Blog
                </Link>
              </li>
              <li>
                <Link className='li' to='/contact'>
                  {' '}
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className='grid-child'>
            <div className='logo-network contain'>
              <h4>Siguenos</h4>
              <ul className='list-logo'>
                <li>
                  <span>
                    <img src={imgFacebook} alt='' />
                  </span>
                </li>
                <li>
                  <span>
                    <img src={imgTwitter} alt='' />
                  </span>
                </li>
                <li>
                  <span>
                    <img src={imgInstagram} alt='' />
                  </span>
                </li>
                <li>
                  <span>
                    <img src={imgLinkdin} alt='' />
                  </span>
                </li>
              </ul>
            </div>
            <div className='contact-us-contain '>
              <h4>Encuentranos</h4>
              <ul className='list-data'>
                <li>
                  <i className='fa-regular fa-envelope'></i> email@
                </li>
                <li>
                  <i className='fa-solid fa-phone'></i> numero telefono fijo
                </li>
                <li>
                  <i className='fa-light fa-phone'></i> numero telefono celular
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className='container-boder-botton'>
        <div className='border-botton'>
          <br />
          <p>@Cancún Digital, todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
