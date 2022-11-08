import React from 'react';
import Contact from './Contact';
import '../assets/styles/graphics.css';
import imgGraphics from '../assets/images/SVG/graphics.svg';
import imgIdent from '../assets/images/graphics/identidad.png';
import imgBaner from '../assets/images/graphics/tecnologia-banner.png';
import imgWeb from '../assets/images/graphics/diseñoweb.png';

const Graphics = () => {
  return (
    <>
      <div className='graphics-container-general'>
        <div className='container-img-title-graphics web'>
          <img src={imgGraphics} alt='' />
        </div>
        <div class='wave graphics'></div>
        <div class='wave2 graphics'></div>
        <div class='wave3 graphics'></div>
        <h1>DISEÑO</h1>
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
      <div className='container-graphics'>
        <div className='graphics-description-card'>
          <img src={imgIdent} alt='' />
          <h4>Identidad Corporativa</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='graphics-description-card'>
          <img src={imgBaner} alt='' />

          <h4>Banner para Campaña</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='graphics-description-card'>
          <img src={imgWeb} alt='' />

          <h4>Diseño Web</h4>
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

export default Graphics;
