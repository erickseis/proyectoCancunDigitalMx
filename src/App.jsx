import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';
import About from './components/About';
import Contact from './components/Contactus';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Services from './components/Services';
import Team from './components/Team';
import WebPosition from './components/WebPosition';
import SocialAds from './components/SocialAds';
import Creative from './components/Creative';
import NetworkSocials from './components/NetworkSocials';
import Graphics from './components/Graphics';
import EmailMarketing from './components/EmailMarketing';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nosotros' element={<About />} />
          <Route path='/soluciones' element={<Services />} />
          <Route path='/equipo' element={<Team />} />
          <Route path='/contacto' element={<Contact />} />
          <Route
            path='/soluciones/posicionamiento-web'
            element={<WebPosition />}
          />
          <Route path='/soluciones/social-ADS' element={<SocialAds />} />
          <Route path='/soluciones/contenido-creativo' element={<Creative />} />
          <Route
            path='/soluciones/gestion-redes-sociales'
            element={<NetworkSocials />}
          />
          <Route path='/soluciones/diseño' element={<Graphics />} />
          <Route path='/soluciones/correo' element={<EmailMarketing />} />
        </Routes>
        <Footer className='footer' />
      </BrowserRouter>
    </div>
  );
}

export default App;
