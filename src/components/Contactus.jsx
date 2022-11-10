import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import '../assets/styles/contactus.css';
import Contact from '../components/Contact';

const Contactus = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Contacto - Cancún Digital</title>
        <meta
          name='desciption'
          content='Contactanos a traves de nuestro formulario.'
        />
      </Helmet>
      <div className='contactus-container'>
        <Contact />
      </div>
    </Fragment>
  );
};

export default Contactus;
