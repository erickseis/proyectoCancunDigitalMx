import React from 'react';
import '../assets/styles/aboutUs.css';
import Contact from './Contact';
const About = () => {
  return (
    <>
      <div className='contain-aboutUs'>
        <div className='child-aboutus general'>
          <h1>SOBRE NOSOTROS</h1>
          <span></span>
          <br />
          <p>
            Cancún Digital es una empresa de marketing digital enfocada a
            optimizar la inversión de las campañas digitales. Contamos con un
            equipo multidisciplinario preparado para el desarrollo de
            contenidos, manejo de ideas creativas y siempre con el objetivo de
            mejorar los resultados publicitarios. Nos comprometemos a dar un
            excelente servicio a nuestros clientes aportando soluciones
            pertinentes e innovadoras para cada proyecto.
          </p>
        </div>
        <br />
        <div className='child-aboutus-title'>
          <h1>
            No brindamos servicios, brindamos <span>soluciones</span> adecuadas
            a <span>tus necesidades</span>
          </h1>
        </div>
        <br />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            aliquid sit perferendis assumenda voluptatum illum placeat unde
            aspernatur! Et voluptas sed nobis, ratione sequi quis impedit
            reprehenderit totam corrupti ab?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            aliquid sit perferendis assumenda voluptatum illum placeat unde
            aspernatur! Et voluptas sed nobis, ratione sequi quis impedit
            reprehenderit totam corrupti ab?
          </p>
        </div>
        <div className='child-aboutus general'>
          <h1>NUESTRAS OFICINAS</h1>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            repudiandae alias voluptatem minus, fugiat, quos magnam unde
            laboriosam sed dolorum rerum, voluptate fugit tenetur beatae iure
            quae fuga in ullam!
          </p>
          <dir className=''>
            <img src='' alt='' />
          </dir>
          <dir className=''>
            <img src='' alt='' />
            <img src='' alt='' />
            <img src='' alt='' />
            <img src='' alt='' />
            <img src='' alt='' />
            <img src='' alt='' />
            <img src='' alt='' />
            <img src='' alt='' />
          </dir>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default About;
