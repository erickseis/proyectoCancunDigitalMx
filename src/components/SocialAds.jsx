import React from 'react';
import '../assets/styles/webPosition.css';
import imgSocialAds from '../assets/images/SVG/socialAds.svg';
import Contact from './Contact';
import communication from '../assets/images/social-ads/comunicacion-img.png';
import graphics from '../assets/images/social-ads/icon_diseno.png';
import segmentation from '../assets/images/social-ads/icon_segmentacionj.png';
import social from '../assets/images/social-ads/icon_social.png';
import analitics from '../assets/images/social-ads/icon_analitics.png';
const SocialAds = () => {
  return (
    <>
      <div className='WebPosition-container-general'>
        <div className='container-img-title web'>
          <img src={imgSocialAds} alt='' />
        </div>
        <div class='wave solutions'></div>
        <div class='wave2 solutions'></div>
        <div class='wave3 solutions'></div>
        <h1>SOCIAL ADS</h1>
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
          <img src={communication} alt='' />
          <h4>Comunicacion</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='webPosition-description-card'>
          <img src={graphics} alt='' />

          <h4>Diseño</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='webPosition-description-card'>
          <img src={segmentation} alt='' />

          <h4>Segmentacion</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='webPosition-description-card'>
          <img src={social} alt='' />

          <h4>Red Social</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='webPosition-description-card'>
          <img src={analitics} alt='' />

          <h4>Análisis</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
      </div>
      <section>
        <Contact />
      </section>
    </>
  );
};

export default SocialAds;
