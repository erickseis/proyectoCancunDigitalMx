import React from 'react';
import Contact from './Contact';
import '../assets/styles/webPosition.css';
import '../assets/styles/creative.css';
import creativeImg from '../assets/images/SVG/creative.svg';

const Creative = () => {
  return (
    <>
      <div className='creative-container-general'>
        <div className='container-img-title-creative web'>
          <img src={creativeImg} alt='' />
        </div>
        <div class='wave creative'></div>
        <div class='wave2 creative'></div>
        <div class='wave3 creative'></div>
        <h1>CONTENIDO CREATIVO</h1>
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
      <div className='container-creative'>
        <div className='creative-description-card'>
          {/* <img src={imgGoogleAds} alt='' /> */}
          <h4>Google Ads</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='creative-description-card'>
          {/* <img src={imgYoutube} alt='' /> */}

          <h4>Youtube</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='creative-description-card'>
          {/* <img src={imgGmail} alt='' /> */}

          <h4>Gmail</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='creative-description-card'>
          {/* <img src={imgSeo} alt='' /> */}

          <h4>SEO</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='creative-description-card'>
          {/* <img src={imgSocialAds} alt='' /> */}

          <h4>Social ads</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='creative-description-card'>
          {/* <img src={imgRemarketing} alt='' /> */}
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
    </>
  );
};

export default Creative;
