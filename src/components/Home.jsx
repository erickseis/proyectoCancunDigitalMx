import React from 'react';
import '../assets/styles/home.css';
import img2 from '../assets/images/disenadores-web-barcelona.gif';

const Home = () => {
  return (
    <>
      <div className='container-general'>
        <div className='containerBackgroundImage'>
          <img className='backgroundImage' src={img2} alt='' />
        </div>
        <div className='container'>
          <div className='wave'></div>
          <div className='wave2'></div>
          <div className='wave3'></div>
        </div>
        <div className='header'>
          <div className='title'>
            <h1>CANCÚN</h1>
            <br />
            <h2>DIGITAL</h2>
          </div>
          <br />
        </div>
      </div>
      <div className='service-about'>
        <button className='btn btn-service'>
          <a href=''>
            {' '}
            <strong>Servicios</strong>{' '}
          </a>
        </button>
        <button className='btn btn-about'>
          <a href='#aboutUs'>
            {' '}
            <strong>Nosotros </strong>{' '}
          </a>
        </button>
      </div>
      <section>
        <article className='description-about'>
          <h1 id='aboutUs'>NOSOTROS</h1>
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
        </article>
      </section>
    </>
  );
};

export default Home;
