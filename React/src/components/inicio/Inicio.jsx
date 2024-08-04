import React from 'react';
import './ini_estilos.css';



const Inicio = () => {
 
    return (
      <div id="lead">
        <div id="lead-content">
            <h1>Bienvenido a Binnie</h1>
            <p>
            Descubre actividades y ejercicios que te ayudarán a mantener el equilibrio emocional, 
            desde prácticas de respiración hasta ejercicios creativos. <br /> Binnie te acompaña en tu 
            viaje hacia el bienestar mental. 
            </p>
            <a href="/menu" class="btn-rounded-white">Comenzar</a>
        </div>
        
        <div id="lead-overlay"></div>

        
    </div>
  );
};

export default Inicio;



