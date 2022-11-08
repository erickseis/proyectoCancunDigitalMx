import React from 'react';
import '../assets/styles/webPosition.css';
import imgWeb from '../assets/images/SVG/webPosition1.svg';
import imgGoogleAds from '../assets/images/Google_Ads_logo.svg.png';
import imgYoutube from '../assets/images/youtube-logo-hd-8.png';
import imgGmail from '../assets/images/Gmail_Icon.png';
import imgSeo from '../assets/images/seo.png';
import imgSocialAds from '../assets/images/social-ads-miniatura.png';
import imgRemarketing from '../assets/images/remarketing.png';

const WebPosition = () => {
  return (
    <>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ab
          fugiat possimus reiciendis nisi animi hic ducimus? Expedita nulla
          dolores tempora amet veniam ipsa magni odit recusandae cupiditate.
          Non, laborum?
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
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='webPosition-description-card'>
          <img src={imgGmail} alt='' />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='webPosition-description-card'>
          <img src={imgSeo} alt='' />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='webPosition-description-card'>
          <img src={imgSocialAds} alt='' />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='webPosition-description-card'>
          <img src={imgRemarketing} alt='' />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
      </div>
    </>
  );
};

export default WebPosition;
