import React from 'react';
import { Link } from 'react-router-dom';
import './TalleresCard.module.css';

function TalleresCards({ DataTaller }) {
    const cardTallerStyle = {
        padding: '2rem',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '200px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        verticalAlign: 'top',
        backgroundColor: '#FED2C0',
        gap: '1rem',


    };



    return (
        <div className="CardTaller" style={cardTallerStyle}>
            <div> <img src={DataTaller.imagenURL} alt={DataTaller.title} /></div>

            <h2
            >{DataTaller.title}</h2>
            <p
            >{DataTaller.date}</p>
            <p
            >{DataTaller.formato}</p>
            <p
            >{DataTaller.ubicaion}</p>
            <Link to ="/registrationForm"><button >Inscribete</button>
            </Link>
            

        </div>
    );
}




export default TalleresCards;