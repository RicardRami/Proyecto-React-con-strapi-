
import React from 'react';
import './menu.css';
import imagen1 from './feliz.jpeg';
import imagen2 from './nota.jpeg'
import imagen3 from './relaja.jpeg'

const Menu = () => {
    return (
        <div className="caja">
            <div className="box">
                Tus momentos favoritos <br />
                <img src={imagen1} alt="" />
                <p><a href='/frases'>Ir a mis momentos</a></p>
            </div>
            <div className="box">
                Recordatorios <br />
                <img src={imagen2} alt="" />
                <p><a href='/momentos'>Ir frases</a></p>
                </div>
            <div className="box">
                Relajación <br />
                <img src={imagen3} alt="" />
                <p><a href='/juego'>Ir a relajación</a></p>
            </div>
        </div>
    );
};

export default Menu;
