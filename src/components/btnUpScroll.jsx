import React from 'react';
import '../assets/styles/btnUpScroll.css';
import ScrollToTop from 'react-scroll-to-top';

export default function BtnUpScroll() {
  return (
    <div className='BtnUpScroll'>
      <ScrollToTop className='btn-smooth' smooth color='white' />
    </div>
  );
}
