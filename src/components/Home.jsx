import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/home.css';
import img3 from '../assets/images/4595021.png';
import img2 from '../assets/images/disenadores-web-barcelona.gif';
import img1 from '../assets/images/40-Usos-del-Celular-en-el-Aula-300x185.png';
import img from '../assets/images/logo.gif';
import imgMexico from '../assets/images/Mapa-de-Mexico-cb5a2e9a.png';
import Contact from './Contact';
import BtnUpScroll from '../components/btnUpScroll';
import mail from '../assets/images/SVG/mail.svg';
import socialAds from '../assets/images/SVG/socialAds.svg';
import webPosition from '../assets/images/SVG/webPosition1.svg';
import creative from '../assets/images/SVG/creative.svg';
import netSocials from '../assets/images/SVG/netSocials.svg';
import graphics from '../assets/images/SVG/graphics.svg';

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
        <div className='header' id='header'>
          <div className='title'>
            <h1>CANCÚN</h1>
            <br />
            <h2>DIGITAL</h2>
          </div>
          <br />
        </div>
        <div className='service-about'>
          <button className='btn btn-service'>
            <Link to='/services'>
              <strong>Servicios</strong>
            </Link>
          </button>
          <button className='btn btn-about'>
            <Link to='/about'>
              <strong>Nosotros </strong>
            </Link>
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
                className='fa-solid fa-heart'
              ></i>
            </div>
            <h1 id='aboutUs'>SOBRE NOSOTROS</h1>
            <br />
            <p>
              Cancún Digital es una empresa de marketing digital enfocada a
              optimizar la inversión de las campañas digitales. Contamos con un
              equipo multidisciplinario preparado para el desarrollo de
              contenidos, manejo de ideas creativas y siempre con el objetivo de
              mejorar los resultados publicitarios.
              <br />
              Nos comprometemos a dar un servicio excelente a nuestros clientes
              aportando soluciones relevantes e innovadoras para cada proyecto.
              Nuestro equipo tiene una amplia experiencia en la construcción de
              sitios web, gestión de redes sociales, optimización de motores de
              búsqueda y creación de contenidos. Con más de 10 años de
              experiencia en este campo, garantizamos que todos nuestros
              servicios se llevan a cabo de manera eficiente, con alta calidad y
              máxima satisfacción de nuestros clientes.
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
              Estamos ubicados en:
              <br />
              <br />
              Av. Bonampak, Manzana 1,Lote 4 y 5, Local SA 2, Super Manzana 8,
              77504 Cancún, Q.R.
            </p>
            <img
              // style={{ width: '200px' }}
              src={imgMexico}
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
              Estrategia e implementación de SEO: Asegurarse de que su sitio web
              está optimizado para los motores de búsqueda, para ayudar a que su
              sitio sea encontrado por las personas que necesitan sus productos
              o servicios.
              <br />
              <br />
              Publicidad digital: Creación de una estrategia publicitaria
              adaptada a sus necesidades y objetivos, ya sea para dar a conocer
              su marca o para vender sus productos. -
            </q>
          </div>

          <div className='container-card text-desing'>
            <div className='card text-desing'>
              <img src={mail} alt='' />
              <h4>Email marketing</h4>
              <p>
                Empleando esta herramienta, podras comunicarte digitalmente con
                leads y clientes a través del envío masivo de correos
                electrónicos a una base de contactos.
              </p>
            </div>
            <div className='card text-desing'>
              <img src={socialAds} alt='' />
              <h4>Social Ads</h4>
              <p>
                Planificamos y generamos campañas de anuncios para llegar a
                través de una segmentación específica a tus potenciales
                clientes.
              </p>
            </div>
            <div className='card text-desing'>
              <img src={webPosition} alt='' />
              <h4>Posicionamiento</h4>
              <p>
                Posicionamos y potenciamos a tu marca frente a la competencia a
                través de campañas de anuncios en Google, YouTube, Gmail y en
                Redes Sociales.
              </p>
            </div>
            <div className='card text-desing'>
              <img src={creative} alt='' />
              <h4>Contenido creativo</h4>
              <p>
                Potenciamos la imagen de tu marca a través del diseño,
                reflejando una comunicación direccionada hacia tu audiencia y
                alineada con los valores de tu empresa.
              </p>
            </div>
            <div className='card text-desing'>
              <img src={netSocials} alt='' />
              <h4>Redes sociales</h4>
              <p>
                Creamos contenido útil para tus clientes actuales y potenciales,
                además de interactuar con ellos con una mezcla perfecta de
                esfuerzo, diseño y generar contenidos. asi como experiencia.
              </p>
            </div>
            <div className='card text-desing'>
              <img src={graphics} alt='' />
              <h4>Diseño</h4>
              <p>
                Potenciamos la imagen de tu marca a través del diseño,
                reflejando una comunicación direccionada hacia tu audiencia y
                alineada con los valores de tu empresa.
              </p>
            </div>
          </div>

          <br />
        </article>
        0{' '}
        <article className='text-desing success-stories-container'>
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
          </div>
          <div className='btn-view-more-container'>
            <button className='btn-view-more cards '>Ver Todos</button>
          </div>
        </article>
        <article>
          <div className='container-cancun-section'>
            <div className='img-logo-container'>
              <img src={img} alt='' />
            </div>
            <q>
              Somos una empresa de marketing digital, llamada Cancún Digital con
              experiencia en promoción y análisis de campañas publicitarias en
              Internet.
            </q>
            <div className='btn-view-more-container cancun-section'>
              <button className='btn-view-more cards '>Ver Todos</button>
            </div>
          </div>
        </article>
        {/* <article className='text-desing client-us'>
          <div className='child-clientus'>
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
        </article> */}
      </section>
      <br />

      <section className='news-section-container'>
        <article className='text-desing news-container'>
          <div className='title-news'>
            <h1>ÚLTIMAS NOVEDADES</h1>
          </div>
          <div className='ultimate-news-container'>
            <div className='ultimate-news'>
              <div className='img-contain news1'>
                <img
                  src='https://www.soul.com.uy/public/7c9a05ec82.jpg'
                  alt=''
                />
              </div>
              <h4>
                <a href=''>GOOGLE ANALYTICS</a>{' '}
              </h4>
              <h1>¿Estrategias efectivas?: Data driven creativity</h1>
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
            </div>
          </div>

          <div className='card-news-container'>
            <div className='card-news'>
              <div className='img-contain news'>
                <img
                  src='https://www.soul.com.uy/public/404d69b268.jpg'
                  alt=''
                />
              </div>
              <h4>
                <a href=''>GOOGLE ANALYTICS</a>{' '}
              </h4>
              <br />
              <h3>¿Por qué es importante utilizarla?</h3>
              <br />
              <h5>Pablo tarsui</h5>
            </div>
            <div className='card-news'>
              <div className='img-contain news'>
                <img
                  src='https://www.soul.com.uy/public/404d69b268.jpg'
                  alt=''
                />
              </div>
              <h4>
                <a href=''>GOOGLE ANALYTICS</a>{' '}
              </h4>
              <br />
              <h3>¿Por qué es importante utilizarla?</h3>
              <br />
              <h5>Pablo tarsui</h5>
            </div>
            <div className='card-news'>
              <div className='img-contain news'>
                <img
                  src='https://www.soul.com.uy/public/404d69b268.jpg'
                  alt=''
                />
              </div>
              <h4>
                <a href=''>GOOGLE ANALYTICS</a>{' '}
              </h4>
              <br />
              <h3>¿Por qué es importante utilizarla?</h3>
              <br />
              <h5>Pablo tarsui</h5>
            </div>
            <div className='card-news'>
              <div className='img-contain news'>
                <img
                  src='https://www.soul.com.uy/public/404d69b268.jpg'
                  alt=''
                />
              </div>
              <h4>
                <a href=''>GOOGLE ANALYTICS</a>{' '}
              </h4>
              <br />
              <h3>¿Por qué es importante utilizarla?</h3>
              <br />
              <h5>Pablo tarsui</h5>
            </div>
          </div>

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
      <BtnUpScroll />
    </>
  );
};

export default Home;
