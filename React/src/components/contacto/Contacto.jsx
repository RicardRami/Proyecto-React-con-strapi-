import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contacto_estilo.css';

function Contacto() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3yrm6hx', 'template_a2vedda', formRef.current, 'r9RjZNJ4w6WquSU9H')
    .then((response) => {
      console.log('Correo enviado', response);
    })
    .catch((error) => {
      console.error('Error al enviar el correo:', error);
    });
  };

  return (
    <div className="contacto-layout">
      <div className="contacto-info">
        <h1>Contáctanos</h1>
        <p>
          Si tienes preguntas, inquietudes o necesitas ayuda emocional, estamos aquí para escucharte.
          Usa el formulario a la derecha para contactarnos o consulta nuestros recursos para obtener ayuda adicional.
        </p>
        <div className="contacto-social">
          <p>Queremos recordarte que Binnie no puede sustituir ningun tipo de ayuda prefesional, estamos para apoyarte durante tu proceso, sin embargo es importante atenderse con especialistas en caso de alguna emergencia. <br />
          SAPTEL es un servicio de salud mental y Medicina a Distancia  atendido por psicólogos seleccionados, entrenados, capacitados y supervisados que proporcionan servicios de apoyo psicológico, consejo psicoterapéutico e intervención en crisis emocional a traves de telefono en forma gratuita</p>
          <br />
          <h2>NO OLVIDES QUE LO MAS IMPORTANTE PARA NOSOTROS ERES TU, PIDE AYUDA CUANDO SEA NECESARIO</h2>
          
        </div>
        <div className="contacto-recursos">
          <h2>Recursos para Ayuda en Salud Mental</h2>
          <ul>
            <li><a href="https://www.telefonodelaesperanza.org/" target="_blank" rel="noopener noreferrer">Teléfono de la Esperanza</a></li>
            <li><a href="https://suicidepreventionlifeline.org/" target="_blank" rel="noopener noreferrer">Línea Nacional de Prevención del Suicidio (EE.UU.)</a></li>
            <li><a href="https://www.samaritans.org/" target="_blank" rel="noopener noreferrer">Samaritans (en inglés)</a></li>
          </ul>
        </div>
      </div>

      <div className="contacto-form">
        <h2>Formulario de Contacto</h2>
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="user_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="user_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="message" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
