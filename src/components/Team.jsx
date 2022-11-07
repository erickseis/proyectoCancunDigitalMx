import React from 'react';
import Contact from './Contact';
import '../assets/styles/team.css';

const Team = () => {
  return (
    <>
      <div className='contain-team'>
        <div className='child-team general'>
          <br />
          <h1>NUESTRO EQUIPO</h1>
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
          <p>
            ¡Te estamos esperando, puedes ser el proximo en pertenecer a nuestro
            equipo!
          </p>
        </div>
        <div>
          <div className='img'>
            <img src='' alt='' />
            <img src='' alt='' />
            <img src='' alt='' />
            <img src='' alt='' />
            <img src='' alt='' />
          </div>
        </div>
      </div>
      <div className='utils-working container-general'>
        <div className='child-utils-working'>
          <i class='fa-solid fa-mug-saucer'></i>
          <br />
          <br />
          <h1>Snacks Incluidos</h1>
          <br />
          <p>Tenemos yerba, Fruta, té y café todos los días, ¡gratis!</p>
        </div>
        <br />
        <div className='child-utils-working'>
          <i class='fa-solid fa-book'></i>
          <br />
          <br />
          <h1>Clases de ingles gratis</h1>
          <br />
          <p>Con el método innovador de Talk to Talk</p>
        </div>
        <br />
        <div className='child-utils-working'>
          <i class='fa-solid fa-music'></i>
          <br />
          <br />
          <h1>After Office</h1>
          <br />
          <p>Relajamos juntos con buena música</p>
        </div>
        <br />
        <div className='child-utils-working'>
          <i class='fa-solid fa-house'></i>
          <br />
          <br />
          <h1>Modalidad Hibrida</h1>
          <br />
          <p>
            Concurrimos 2 días a la semana a la oficina. ¡Los otros puedes
            trabajarlos desde donde quieras!
          </p>
        </div>
      </div>
      <div className='child-team'>
        <h1>BÚSQUEDAS ACTIVAS</h1>
      </div>

      <Contact />
    </>
  );
};

export default Team;
