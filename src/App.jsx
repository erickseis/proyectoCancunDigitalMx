import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Services from './components/Services';
import Team from './components/Team';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
