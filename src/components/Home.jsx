import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/home.css';
import img3 from '../assets/images/4595021.png';
import img2 from '../assets/images/disenadores-web-barcelona.gif';
import img1 from '../assets/images/40-Usos-del-Celular-en-el-Aula-300x185.png';
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

      <div className='img-container'>
        <img className='img-home img1' src={img1} alt='' />

        <img className='img-home img2' src={img3} alt='' />
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
          <br />
          <button>
            <Link to='/about'>Ver Más</Link>
          </button>
        </article>

        <article className=''>
          <h1 id='aboutUs'>NUESTRAS OFICINAS </h1>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab a,
            explicabo corrupti repudiandae atque consectetur reprehenderit ad
            molestias nobis nisi dolorum voluptates enim aperiam animi quos
            placeat adipisci perspiciatis!ç
          </p>
          <img
            style={{ width: '200px' }}
            src='https://www.soul.com.uy/img/mapa.png'
            alt=''
          />
          <br />
        </article>

        <article className=''>
          <h1 id='aboutUs'>LO QUE HACEMOS</h1>
          <br />
          <br />
          <q>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab a,
          </q>
          <div className='card'>
            .
            <img
              style={{ width: '100px' }}
              src='https://www.soul.com.uy/img/ser_perfo.png'
              alt=''
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              voluptate at nobis perferendis reiciendis.
            </p>
          </div>
          <div className='card'>
            .
            <img
              style={{ width: '100px' }}
              src='https://www.soul.com.uy/img/ser_redes.png'
              alt=''
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              voluptate at nobis perferendis reiciendis.
            </p>
          </div>
          <br />
        </article>

        <article className=''>
          <h1 id='aboutUs'>CASOS DE ÉXITO </h1>
          <br />
          <br />
          <img
            style={{ width: '200px' }}
            src='https://www.soul.com.uy/img/mapa.png'
            alt=''
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab a,
            explicabo corrupti repudiandae atque consectetur reprehenderit ad
            molestias nobis nisi dolorum.
          </p>
          <br />
          <button>
            <i className='fa-solid fa-circle-plus'></i>
          </button>
        </article>
        <article className=''>
          <h1 id='aboutUs'>CASOS DE ÉXITO </h1>
          <br />
          <br />
          <img
            style={{ width: '200px' }}
            src='https://www.soul.com.uy/img/mapa.png'
            alt=''
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab a,
            explicabo corrupti repudiandae atque consectetur reprehenderit ad
            molestias nobis nisi dolorum.
          </p>
          <br />
          <button>
            <i className='fa-solid fa-circle-plus'></i>
          </button>
        </article>
        <article className=''>
          <h1 id='aboutUs'>CASOS DE ÉXITO </h1>
          <br />
          <br />
          <img
            style={{ width: '200px' }}
            src='https://www.soul.com.uy/img/mapa.png'
            alt=''
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab a,
            explicabo corrupti repudiandae atque consectetur reprehenderit ad
            molestias nobis nisi dolorum.
          </p>
          <br />
          <button>
            <i className='fa-solid fa-circle-plus'></i>
          </button>
        </article>
        <div className='view-more'>
          <button>Ver Todos</button>
        </div>

        <article>
          <div>
            <h1>NUESTROS CLIENTES</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              maxime facilis voluptatibus modi omnis...
            </p>
          </div>
          <br />
          <span>logo empresa</span>

          <br />
          <span>logo empresa</span>

          <br />
          <span>logo empresa</span>

          <br />
          <span>logo empresa...</span>
          <div className='view-more'>
            <button>Ver Todos</button>
          </div>
        </article>
      </section>
      <br />
      <section>
        <article>
          <h1>ÚLTIMAS NOVEDADES</h1>
          <img
            style={{ width: '200px' }}
            src='https://www.soul.com.uy/public/7c9a05ec82.jpg'
            alt=''
          />
          <h4>
            <a href=''>GOOGLE ANALYTICS</a>{' '}
          </h4>

          <h1>¿Estrategias efectivas?: Data driven creativity</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            esse eos neque at, excepturi deleniti earum doloremque nihil tempora
            perspiciatis voluptatibus unde praesentium possimus aliquam
            voluptas, dolor quas ea mollitia!
          </p>
          <br />
          <h3>¿Por qué es importante utilizarla?</h3>
          <img
            style={{ width: '100px' }}
            src='https://www.soul.com.uy/public/129ee64291.jpg'
            alt=''
          />
        </article>
        <article>
          <div>
            <h1>OTRAS NOVEDADES</h1>
          </div>
        </article>
      </section>
    </>
  );
};

export default Home;
