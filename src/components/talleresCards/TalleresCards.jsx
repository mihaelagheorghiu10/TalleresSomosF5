import React from 'react';
import './TalleresCard.css';

function CardTalleres({ imagenURL, titulo, fecha, forma, lugar }) {
    return (
        <div className="CardTalleres-container">
            <div className="CardTalleres">
                <img src={imagenURL} alt="Imagen" className="CardTalleres-image" />
                <h2 className="CardTalleres-title">{titulo}</h2>
                <p className="CardTalleres-info">Fecha: {fecha}</p>
                <p className="CardTalleres-info">Forma: {forma}</p>
                <p className="CardTalleres-info">Lugar: {lugar}</p>
            </div>
        </div>
    );
}

export default CardTalleres;