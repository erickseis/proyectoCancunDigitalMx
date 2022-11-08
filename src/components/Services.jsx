import React from 'react';
import '../assets/styles/services.css';
import { Link } from 'react-router-dom';
import mail from '../assets/images/SVG/mail.svg';
import socialAds from '../assets/images/SVG/socialAds.svg';
import webPosition from '../assets/images/SVG/webPosition1.svg';
import creative from '../assets/images/SVG/creative.svg';
import netSocials from '../assets/images/SVG/netSocials.svg';
import graphics from '../assets/images/SVG/graphics.svg';

const Services = () => {
  return (
    <>
      <div className='contain-services'>
        <div className='child-services general'>
          <h1>NUESTROS SERVICIOS</h1>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab a,
            explicabo corrupti repudiandae atque consectetur reprehenderit ad
            molestias nobis nisi dolorum voluptates enim aperiam animi quos
            placeat adipisci perspiciatis!ç
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab a,
            explicabo corrupti repudiandae atque consectetur reprehenderit ad
            molestias nobis nisi dolorum voluptates enim aperiam animi quos
            placeat adipisci perspiciatis!ç
          </p>
        </div>
      </div>

      <div className='card-services container'>
        <div className='card-services-child'>
          <img className='img-social-ads' src={webPosition} alt='' />
          <h4>
            <Link>POSICIONAMIENTO WEB</Link>
          </h4>
        </div>
        <div className='card-services-child'>
          <img
            id='img-social-ads'
            className='img-social-ads'
            src={socialAds}
            alt=''
          />
          <h4>
            <Link>SOCIAL ADS</Link>
          </h4>
        </div>
        <div className='card-services-child'>
          <img
            id='img-graphic'
            className='img-social-ads'
            src={creative}
            alt=''
          />
          <h4>
            <Link>CONTENIDO CREATIVO</Link>
          </h4>
        </div>
        <div className='card-services-child'>
          <img
            id='network-img'
            className='img-social-ads'
            src={netSocials}
            alt=''
          />
          <div className='contain-social-network'>
            <h4>
              <Link>GESTIÓN REDES SOCIALES</Link>
            </h4>
          </div>
        </div>
        <div className='card-services-child'>
          <img className='img-social-ads' src={graphics} alt='' />
          <h4>
            <Link>DISEÑO</Link>
          </h4>
        </div>
        <div className='card-services-child'>
          <img id='img-email' className='img-social-ads' src={mail} alt='' />
          <h4>
            <Link>EMAIL MARKETING</Link>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Services;
