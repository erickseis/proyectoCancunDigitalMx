import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/footer.css';
import imagen from '../assets/images/logo.gif';
const Footer = () => {
  return (
    <div className='footer-contain'>
      <footer className='footer'>
        <div className='footer-child'>
          <div className='logo-footer img'>
            <img src={imagen} alt='' />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            consectetur dolor nesciunt facere, eum repellat laboriosam nihil
            reprehenderit aut.{' '}
          </p>
          <ul>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <Link to='/about'>Nosotros</Link>
            </li>
            <li>
              <Link to='/'>Posicionamiento Web</Link>
            </li>
            <li>
              <Link to='/'>Social ads</Link>
            </li>
            <li>
              <Link to='/'> Contenido creativo</Link>
            </li>
            <li>
              <Link to='/'>Gestion redes sociales</Link>
            </li>
            <li>
              <Link to='/'>Diseño</Link>
            </li>
            <li>
              <Link to='/'>Email marketing</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/'>Sasos de exito</Link>
            </li>
            <li>
              <Link to='/'>Clientes</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'> Contacto</Link>
            </li>
          </ul>
          <div>
            <ul>
              <li>
                <span>
                  <img src='' alt='' />
                </span>
              </li>
              <li>
                <span>
                  <img src='' alt='' />
                </span>
              </li>
              <li>
                <span>
                  <img src='' alt='' />
                </span>
              </li>
              <li>
                <span>
                  <img src='' alt='' />
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h1>Encuentranos</h1>
            <ul>
              <li>email@</li>
              <li>numero telefono fijo</li>
              <li>numero telefono celular</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
