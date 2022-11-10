import React, { Fragment } from 'react';
import '../assets/styles/webPosition.css';
import imgWeb from '../assets/images/SVG/webPosition1.svg';
import imgGoogleAds from '../assets/images/Google_Ads_logo.svg.png';
import imgYoutube from '../assets/images/youtube-logo-hd-8.png';
import imgGmail from '../assets/images/Gmail_Icon.png';
import imgSeo from '../assets/images/seo.png';
import imgSocialAds from '../assets/images/social-ads-miniatura.png';
import imgRemarketing from '../assets/images/remarketing.png';
import Contact from './Contact';
import { Helmet } from 'react-helmet';

const WebPosition = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Posicionamiento</title>
        <meta
          name='desciption'
          content='Posicionamos y potenciamos a tu marca frente a la competencia a través de campañas de anuncios en Google, YouTube, Gmail y en Redes Sociales.'
        />
      </Helmet>
      <div className='WebPosition-container-general'>
        <div className='container-img-title web'>
          <img src={imgWeb} alt='' />
        </div>
        <div class='wave solutions'></div>
        <div class='wave2 solutions'></div>
        <div class='wave3 solutions'></div>
        <h1>POSICIONAMIENTO WEB</h1>
        <br />
        <br />
        <br />
        <p>
          Posicionamos y potenciamos a tu marca frente a la competencia a través
          de campañas de anuncios en Google, YouTube, Gmail y en Redes Sociales.
        </p>
      </div>
      <div className='container-webPosition'>
        <div className='webPosition-description-card'>
          <img src={imgGoogleAds} alt='' />
          <h4>Google Ads</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='webPosition-description-card'>
          <img src={imgYoutube} alt='' />

          <h4>Youtube</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='webPosition-description-card'>
          <img src={imgGmail} alt='' />

          <h4>Gmail</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='webPosition-description-card'>
          <img src={imgSeo} alt='' />

          <h4>SEO</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='webPosition-description-card'>
          <img src={imgSocialAds} alt='' />

          <h4>Social ads</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='webPosition-description-card'>
          <img src={imgRemarketing} alt='' />
          <h4>Remarketing</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
      </div>
      <section>
        <Contact />
      </section>
    </Fragment>
  );
};

export default WebPosition;
