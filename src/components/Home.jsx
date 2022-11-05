import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/home.css';
import img3 from '../assets/images/4595021.png';
import img2 from '../assets/images/disenadores-web-barcelona.gif';
import img1 from '../assets/images/40-Usos-del-Celular-en-el-Aula-300x185.png';
import img from '../assets/images/logo.gif';
import Contact from './Contact';
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
        <div className='service-about'>
          <button className='btn btn-service'>
            <a href=''>
              <strong>Servicios</strong>
            </a>
          </button>
          <button className='btn btn-about'>
            <a href='#aboutUs'>
              <strong>Nosotros </strong>
            </a>
          </button>
        </div>
      </div>

      <div className='img-container'>
        <img className='img-home img1' src={img1} alt='' />

        <img className='img-home img2' src={img3} alt='' />
      </div>
      <section>
        <article className='text-desing'>
          <div className='container-aboutus'>
            <div>
              <i
                style={{
                  color: '#09c3a1',
                  fontSize: '40px',
                  marginBottom: '1rem',
                }}
                class='fa-solid fa-heart'
              ></i>
            </div>
            <h1 id='aboutUs'>SOBRE NOSOTROS</h1>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab
              a, explicabo corrupti repudiandae atque consectetur reprehenderit
              ad molestias nobis nisi dolorum voluptates enim aperiam animi quos
              placeat adipisci perspiciatis!ç
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab
              a, explicabo corrupti repudiandae atque consectetur reprehenderit
              ad molestias nobis nisi dolorum voluptates enim aperiam animi quos
              placeat adipisci perspiciatis!ç
            </p>
            <br />
            <div className='flex'>
              <div>
                <button className='btn-view-more'>Ver Todos</button>
              </div>
            </div>
          </div>
        </article>
        <article className='container-office-us'>
          <div className='text-desing office-us'>
            <h1 id='aboutUs'>NUESTRAS OFICINAS </h1>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab
              a, explicabo corrupti repudiandae atque consectetur reprehenderit
              ad molestias nobis nisi dolorum voluptates enim aperiam animi quos
              placeat adipisci perspiciatis!ç
            </p>
            <img
              // style={{ width: '200px' }}
              src='https://www.soul.com.uy/img/mapa.png'
              alt=''
            />
          </div>
          <br />
        </article>
        <article className='container-office-us'>
          <div className='what-we-do text-desing '>
            <h1>LO QUE HACEMOS</h1>
            <br />
            <br />
            <q>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab
              a,
            </q>
          </div>

          <div className='container-card text-desing'>
            <div className='card text-desing'>
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
            <div className='card text-desing'>
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
            <div className='card text-desing'>
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
            <div className='card text-desing'>
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
          </div>

          <br />
        </article>
        0{' '}
        <article className='text-desing'>
          <h1 id='aboutUs'>CASOS DE ÉXITO </h1>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab a,
            explicabo corrupti repudiandae atque consectetur reprehenderit ad
            molestias nobis nisi dolorum.
          </p>
          <br />
          <div className='card-container-succes-stories'>
            <div className='card-stories'>
              <div className='img-logo'>
                <img
                  src='https://1000marcas.net/wp-content/uploads/2020/01/Suzuki-Logo.png'
                  alt=''
                />
              </div>
              <h4>Susuki Paraguay</h4>
              <q>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </q>
              <button className='btn-more'>
                <i className='fa-solid fa-circle-plus '></i>
              </button>
            </div>
            <div className='card-stories'>
              <div className='img-logo'>
                <img
                  src='https://1000marcas.net/wp-content/uploads/2020/01/Suzuki-Logo.png'
                  alt=''
                />
              </div>
              <h4>Susuki Paraguay</h4>
              <q>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </q>
              <button className='btn-more'>
                <i className='fa-solid fa-circle-plus '></i>
              </button>
            </div>
            <div className='card-stories'>
              <div className='img-logo'>
                <img
                  src='https://1000marcas.net/wp-content/uploads/2020/01/Suzuki-Logo.png'
                  alt=''
                />
              </div>
              <h4>Susuki Paraguay</h4>
              <q>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </q>
              <button className='btn-more'>
                <i className='fa-solid fa-circle-plus '></i>
              </button>
            </div>
            <div className='card-stories'>
              <div className='img-logo'>
                <img
                  src='https://1000marcas.net/wp-content/uploads/2020/01/Suzuki-Logo.png'
                  alt=''
                />
              </div>
              <h4>Susuki Paraguay</h4>
              <q>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </q>
              <button className='btn-more'>
                <i className='fa-solid fa-circle-plus '></i>
              </button>
            </div>
            <div className='card-stories'>
              <div className='img-logo'>
                <img
                  src='https://1000marcas.net/wp-content/uploads/2020/01/Suzuki-Logo.png'
                  alt=''
                />
              </div>
              <h4>Susuki Paraguay</h4>
              <q>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </q>
              <button className='btn-more'>
                <i className='fa-solid fa-circle-plus '></i>
              </button>
            </div>
            <div className='btn-view-more-container'>
              <button className='btn-view-more cards '>Ver Todos</button>
            </div>
          </div>
        </article>
        <article>
          <div className='container-cancun-section'>
            <div className='img-logo-container'>
              <img src={img} alt='' />
            </div>
            <q>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              odit pariatur cupiditate accusantium saepe magnam, ipsum cumque
              sit delectus ad est similique porro, fugiat consequuntur eveniet
              quasi dolores nisi earum.
            </q>
            <div className='btn-view-more-container cancun-section'>
              <button className='btn-view-more cards '>Ver Todos</button>
            </div>
          </div>
        </article>
        <article className='text-desing'>
          <div>
            <h1>NUESTROS CLIENTES</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              maxime facilis voluptatibus modi omnis...
            </p>
          </div>
          <div className='logo-container clients'>
            <div className='img-clients'>
              <img
                src='https://i.pinimg.com/originals/4e/f9/9b/4ef99bc174c67d7283fca76c78bc6895.png'
                alt=''
              />
            </div>
            <div className='img-clients'>
              <img
                src='https://i.pinimg.com/originals/4e/f9/9b/4ef99bc174c67d7283fca76c78bc6895.png'
                alt=''
              />
            </div>
            <div className='img-clients'>
              <img
                src='https://i.pinimg.com/originals/4e/f9/9b/4ef99bc174c67d7283fca76c78bc6895.png'
                alt=''
              />
            </div>
            <div className='img-clients'>
              <img
                src='https://i.pinimg.com/originals/4e/f9/9b/4ef99bc174c67d7283fca76c78bc6895.png'
                alt=''
              />
            </div>
            <div className='img-clients'>
              <img
                src='https://i.pinimg.com/originals/4e/f9/9b/4ef99bc174c67d7283fca76c78bc6895.png'
                alt=''
              />
            </div>
            <div className='img-clients'>
              <img
                src='https://i.pinimg.com/originals/4e/f9/9b/4ef99bc174c67d7283fca76c78bc6895.png'
                alt=''
              />
            </div>
            <div className='img-clients'>
              <img
                src='https://i.pinimg.com/originals/4e/f9/9b/4ef99bc174c67d7283fca76c78bc6895.png'
                alt=''
              />
            </div>
            <div className='img-clients'>
              <img
                src='https://i.pinimg.com/originals/4e/f9/9b/4ef99bc174c67d7283fca76c78bc6895.png'
                alt=''
              />
            </div>
            <div className='img-clients'>
              <img
                src='https://i.pinimg.com/originals/4e/f9/9b/4ef99bc174c67d7283fca76c78bc6895.png'
                alt=''
              />
            </div>
            <div className='img-clients'>
              <img
                src='https://i.pinimg.com/originals/4e/f9/9b/4ef99bc174c67d7283fca76c78bc6895.png'
                alt=''
              />
            </div>
          </div>
          <div className='flex'>
            <div>
              <button className='btn-view-more'>Ver Todos</button>
            </div>
          </div>
        </article>
      </section>
      <br />
      <section>
        <article className='text-desing news'>
          <h1>ÚLTIMAS NOVEDADES</h1>
          <div className='img-contain news'>
            <img src='https://www.soul.com.uy/public/7c9a05ec82.jpg' alt='' />
          </div>
          <h4>
            <a href=''>GOOGLE ANALYTICS</a>{' '}
          </h4>
          <div className='font-info'>
            <div className='font-img'>
              <img
                src='https://www.soul.com.uy/public/2ef9cffab5.jpeg'
                alt=''
              />
            </div>
            <p>
              <strong>Jose Delgado</strong>
              <br />
              2022-09-22
            </p>
          </div>
          <h1>¿Estrategias efectivas?: Data driven creativity</h1>
          <div className='img-contain news'>
            <img src='https://www.soul.com.uy/public/404d69b268.jpg' alt='' />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            esse eos neque at, excepturi deleniti earum doloremque nihil tempora
            perspiciatis voluptatibus unde praesentium possimus aliquam
            voluptas, dolor quas ea mollitia!
          </p>
          <br />
          <h3>¿Por qué es importante utilizarla?</h3>
          <div className='flex'>
            <div>
              <br />
              <br />
              <button className='btn-view-more'>Ver Todos</button>
            </div>
          </div>
        </article>
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
};

export default Home;
