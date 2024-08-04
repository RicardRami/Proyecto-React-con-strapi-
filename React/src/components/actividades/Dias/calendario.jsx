import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './calendario.css'
import imagen1 from '../emociones/cansado.png'
import imagen2 from '../emociones/confuso.png'
import imagen3 from '../emociones/conmocionado.png'
import imagen4 from '../emociones/feliz.png'
import imagen5 from '../emociones/sorprendido.png'
import imagen6 from '../emociones/llorando.png'
import imagen7 from '../emociones/enojado.png'
import imagen8 from '../emociones/sonoliento.png'



function DaysInMonth() {
  
  const navigate = useNavigate(); 
  useState(navigate('/menu'));
  

  return (
    <div>
    <div>
      <h1>Mi mes:</h1>
      <div class="calendario">
      <form class="form-act">
       <div>
      <label for="fecha">Fecha:</label>
       <input type="date" id="fecha" name="fecha" required/>
     </div>
     <div class="Titulo">
        <h1>¿Como te sientes hoy?</h1>
        <br/>
      </div>
      <div class="radio">
      
      <label class="radiob">
        <input type="radio" value="Preocupado"/>
        <img src={imagen1} alt="Preocupado" />Preocupados
      </label>
      <br />
      <label class="radiob">
        <input type="radio" value="Apatico" />
        <img src={imagen2} alt="Atipico" />Apatico
      </label>
      <br />
      <label class="radiob">
        <input type="radio" value="Estresado"/>
        <img src={imagen3} alt="Estresado" />Estresado
      </label>
      <label class="radiob">
        <input type="radio" value="Feliz"/>
        <img src={imagen4} alt="Feliz" />Feliz
      </label>
      <label class="radiob">
        <input type="radio" value="Sorprendido"  />
        <img src={imagen5} alt="Sorprendido" />Sorpredido
      </label>
      <label class="radiob">
        <input type="radio" value="Triste" />
        <img src={imagen6} alt="Triste" />Triste
      </label>
      <label class="radiob">
        <input type="radio" value="Enojado"  />
        <img src={imagen7} alt="Enojado" />Enojado
      </label>
      <label class="radiob">
        <input type="radio" value="Cansado" />
        <img src={imagen8} alt="Cansado" />Cansado
      </label>      
    </div>
    <div>
        <br/>
    </div>
    <div>
      <h2>¿Te gustaria explorar lo que te hizo sentir?</h2>
      <h2>Este es un espacio seguro para compartir lo que sientes</h2>
      <label for="mensaje">Tu mensaje:</label>
       <textarea id="mensaje" name="mensaje" rows="4" cols="50" required>Escribe tu mensaje aquí...</textarea>
    </div>
     <button type="submit">Enviar</button>
    </form>
    
      
    </div>
    </div>
    </div>
  );
}

export default DaysInMonth;

