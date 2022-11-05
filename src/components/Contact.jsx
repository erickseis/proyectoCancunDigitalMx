import React from 'react';
import { useForm } from 'react-hook-form';
import '../assets/styles/contact.css';
function Contact() {
  const { register, handleSubmit } = useForm();
  return (
    <div className='contact-container'>
      <div className='form-contain'>
        <h1>CONTACTANOS</h1>
        <br />
        <form action=''>
          <div>
            <label>Correo*</label>
            <br />
            <input type='email' name='' />
          </div>
          <div>
            <label>Nombre*</label>
            <br />
            <input type='text' name='' />
          </div>
          <div>
            <label>Apellido</label>
            <br />
            <input type='text' name='' />
          </div>
          <div>
            <label>Telefono de contacto*</label>
            <br />
            <input type='text' name='' />
          </div>
          <div>
            <label>Pais/region*</label>
            <br />
            <input type='text' name='' />
          </div>
          <br />
          <textarea name='' id='' cols='30' rows='10'></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
