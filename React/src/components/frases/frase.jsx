import React, { useEffect, useState } from 'react';
import './style.css';

function DestinationPage() {
  const [imageData, setImageData, myImage, ] = useState('');
  const storedImage = localStorage.getItem('myImage');
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    

  }, []);

  return (
    <div class="Imagenes">
      <h2>Imagenes</h2>
      {imageData && (
        <img src={`data:image/jpeg;base64,${storedImage}`} alt="Imagen guardada" />
      )}
      <p><a href='/prueba'>Subir imagen</a></p>
    </div>
  );
}

export default DestinationPage;