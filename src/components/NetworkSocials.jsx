import React from 'react';
import '../assets/styles/networkSocials.css';
import Contact from './Contact';
import imgNetSoc from '../assets/images/SVG/netSocials.svg';

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
      <div className='container-net'>
        <div className='net-description-card'>
          {/* <img src={idea} alt='' /> */}
          <h4>Ideas</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='net-description-card'>
          {/* <img src={object} alt='' /> */}

          <h4>Objetivos</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='net-description-card'>
          {/* <img src={forms} alt='' /> */}

          <h4>Formatos</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='net-description-card'>
          {/* <img src={developing} alt='' /> */}

          <h4>Desarrollo</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='net-description-card'>
          {/* <img src={analitics} alt='' /> */}

          <h4>Analisis</h4>
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
