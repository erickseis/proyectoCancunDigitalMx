import React, { Fragment } from 'react';
import Contact from './Contact';
import '../assets/styles/webPosition.css';
import '../assets/styles/creative.css';
import creativeImg from '../assets/images/SVG/creative.svg';
import idea from '../assets/images/creative/ideas.png';
import object from '../assets/images/creative/objetivos.png';
import forms from '../assets/images/creative/formatos.png';
import developing from '../assets/images/creative/desarrollo.png';
import analitics from '../assets/images/creative/analisis.png';
import { Helmet } from 'react-helmet';

const Creative = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Contenido Creativo</title>
        <meta
          name='desciption'
          content='Generamos contenido creativo para tu empresa.'
        />
      </Helmet>
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
          <img src={idea} alt='' />
          <h4>Ideas</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='creative-description-card'>
          <img src={object} alt='' />

          <h4>Objetivos</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='creative-description-card'>
          <img src={forms} alt='' />

          <h4>Formatos</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='creative-description-card'>
          <img src={developing} alt='' />

          <h4>Desarrollo</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor a
            doloribus
          </p>
        </div>
        <div className='creative-description-card'>
          <img src={analitics} alt='' />

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
    </Fragment>
  );
};

export default Creative;
