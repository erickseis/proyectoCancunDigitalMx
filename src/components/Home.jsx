import React from 'react';
import '../assets/styles/home.css';
import img2 from '../assets/images/disenadores-web-barcelona.gif';

const Home = () => {
  return (
    <div>
      <div className='containerBackgroundImage'>
        <img className='backgroundImage' src={img2} alt='' />
      </div>
      <header className='container'>
        <div className='wave'></div>
        <div className='wave2'></div>
        <div className='wave3'></div>
      </header>
      <h1>esta es mi ruta HOME</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab a,
        explicabo corrupti repudiandae atque consectetur reprehenderit ad
        molestias nobis nisi dolorum voluptates enim aperiam animi quos placeat
        adipisci perspiciatis!ç
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab a,
        explicabo corrupti repudiandae atque consectetur reprehenderit ad
        molestias nobis nisi dolorum voluptates enim aperiam animi quos placeat
        adipisci perspiciatis!ç
      </p>
    </div>
  );
};

export default Home;
