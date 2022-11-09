import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
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
      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/webPosition' element={<WebPosition />} />
          <Route path='/social' element={<SocialAds />} />
          <Route path='/creative' element={<Creative />} />
          <Route path='/networSocials' element={<NetworkSocials />} />
          <Route path='/graphics' element={<Graphics />} />
          <Route path='/email' element={<EmailMarketing />} />
        </Routes>
        <Footer className='footer' />
      </HashRouter>
    </div>
  );
}

export default App;
