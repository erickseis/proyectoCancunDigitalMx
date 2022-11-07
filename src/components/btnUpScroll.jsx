import React from 'react';
import '../assets/styles/btnUpScroll.css';
import ScrollToTop from 'react-scroll-to-top';

export default function BtnUpScroll() {
  return (
    <div className='BtnUpScroll'>
      <ScrollToTop className='btn-smooth' smooth color='white' />
      <h1>Scroll To See Magic</h1>
      <p style={{ marginTop: '200vh' }}>You Have Reached Bottom</p>
    </div>
  );
}
