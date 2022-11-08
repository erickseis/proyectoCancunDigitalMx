import React from 'react';
import '../assets/styles/networkSocials.css';
import Contact from './Contact';
import imgNetSoc from '../assets/images/SVG/netSocials.svg';
import imgFace from '../assets/images/network social/icon_face.png';
import imgIns from '../assets/images/network social/icon_insta.png';
import imgLink from '../assets/images/network social/icon_linke.png';
import imgTwit from '../assets/images/network social/icon_twit.png';

const NetworkSocials = () => {
  return (
    <>
      <div className='net-container-general'>
        <div className='container-img-title-net web'>
          <img src={imgNetSoc} alt='' />
        </div>
        <div class='wave net'></div>
        <div class='wave2 net'></div>
        <div class='wave3 net'></div>
        <h1>REDES SOCIALES</h1>
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
      <div className='container-net'>
        <div className='net-description-card'>
          <img src={imgFace} alt='' />
          <h4>Facebook</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='net-description-card'>
          <img src={imgIns} alt='' />

          <h4>Instagram</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='net-description-card'>
          <img src={imgTwit} alt='' />

          <h4>Twitter</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='net-description-card'>
          <img src={imgLink} alt='' />

          <h4>Linkedin</h4>
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

export default NetworkSocials;
