import React from 'react';
import { useForm } from 'react-hook-form';
import '../assets/styles/contact.css';
function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='contact-container'>
      <div className='form-contain'>
        <h1>CONTACTANOS</h1>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>
              Correo <span>*</span>
            </label>
            <br />
            <input
              style={{ padding: '0.375rem 0.75rem' }}
              type='email'
              {...register('email', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            {errors.email?.type === 'required' && (
              <p>"El campo email es requerido"</p>
            )}
            {errors.email?.type === 'pattern' && (
              <p>"El campo email debe ser valido"</p>
            )}
          </div>
          <div>
            <label>
              Nombre <span>*</span>
            </label>
            <br />
            <input
              style={{ padding: '0.375rem 0.75rem' }}
              type='text'
              {...register('nombre', { required: true, maxLength: 10 })}
            />
            {errors.nombre?.type === 'required' && (
              <p>"El campo nombre es requerido"</p>
            )}
            {errors.nombre?.type === 'maxLength' && (
              <p>"El campo nombre debe tener menos de 10 caracteres"</p>
            )}
          </div>
          <div>
            <label>Apellido</label>
            <br />
            <input
              style={{ padding: '0.375rem 0.75rem' }}
              type='text'
              {...register('apellido')}
            />
          </div>
          <div>
            <label>
              Telefono de contacto <span>*</span>
            </label>
            <br />
            <input
              style={{ padding: '0.375rem 0.75rem' }}
              type='text'
              {...register('telefono', {
                required: true,
                pattern: /^([0-9])*$/,
              })}
            />
            {errors.telefono?.type === 'required' && (
              <p>"El campo telefono es requerido"</p>
            )}
            {errors.telefono?.type === 'pattern' && (
              <p>"El campo telefono deben ser numeros"</p>
            )}
          </div>
          <div>
            <label>Pais/region</label>
            <br />
            <input
              style={{ padding: '0.375rem 0.75rem' }}
              type='text'
              {...register('pais/region')}
            />
          </div>
          <label>
            Mensaje <span>*</span>
          </label>
          <br />
          <textarea
            style={{ padding: '0.375rem 0.75rem' }}
            name='description'
            id='description'
            cols='30'
            rows='5'
            placeholder='Escribe tu descripcion'
            {...register('descripcion', { required: true })}
          ></textarea>
          {errors.descripcion?.type === 'required' && (
            <p>"Debes agregar una descripcion"</p>
          )}
          <br />
          <div className='flex'>
            <input className='btn submit' type='submit' value='Enviar' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
