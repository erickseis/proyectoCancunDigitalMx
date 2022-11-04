import React from 'react';
import '../assets/styles/burguerBtn.css';

const BurgerBtn = (props) => {
  return (
    <div
      onClick={props.handleClick}
      className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerBtn;
