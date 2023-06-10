import React, { useState } from 'react';
import style from './RegistrationForm.module.css'
import { getInscriptionT } from '../../services/talleres.services';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



const RegistrationForm = () => {
    const [DataInscriptionT, setDataInscriptionT] = useState([])
    const [formSubmitted, setFormSubmitted] = useState(false);
    const getAllInscription = async () => {
        const { data } = await getInscriptionT();
        setDataInscriptionT(data.registrationForm);
        console.log(data, "json");

    }

    useEffect(() => {
        getAllInscription();
    }, [])


    const [nombre, setNombre] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [genero, setGenero] = useState('');
    const [email, setEmail] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');
    const [aceptaPrivacidad, setAceptaPrivacidad] = useState(false);
    const [comoNosConocio, setComoNosConocio] = useState('');

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleWhatsappChange = (event) => {
        setWhatsapp(event.target.value);
    };

    const handleGeneroChange = (event) => {
        setGenero(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleUbicacionChange = (event) => {
        setUbicacion(event.target.value);
    };

    const handleNacionalidadChange = (event) => {
        setNacionalidad(event.target.value);
    };

    const handleAceptaPrivacidadChange = (event) => {
        setAceptaPrivacidad(event.target.checked);
    };

    const handleComoNosConocioChange = (event) => {
        setComoNosConocio(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Nombre completo:', nombre);
        console.log('Email:', email);
        console.log('Whatsapp:', whatsapp);
        console.log('Genero:', genero);
        console.log('Ubicación:', ubicacion);
        console.log('Nacionalidad:', nacionalidad);
        console.log('Acepta privacidad:', aceptaPrivacidad);
        console.log('Como nos conoció:', comoNosConocio);

        // realizar el envío de datos o ejecutar cualquier acción adicional
        setFormSubmitted(true);
    };






    return (
        <form onSubmit={handleSubmit} className={style.container}>
            <div className={style.inputContainer}>
                <label htmlFor="nombre">Nombre completo:</label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={handleNombreChange}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="whatsapp">Whatsapp:</label>
                <input
                    type="whatsapp"
                    id="whatsapp"
                    value={whatsapp}
                    onChange={handleWhatsappChange}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="genero">Como se identifica:</label>
                <select id="genero" value={genero} onChange={handleGeneroChange}>
                    <option value="">Seleccione</option>
                    <option value="H">Hombre</option>
                    <option value="M">Mujer</option>
                    <option value="O">Otro</option>
                </select>

            </div>
            <div className={style.inputContainer}>
                <label htmlFor="ubicacion"> Ubicación:</label>
                <input
                    type="text"
                    id="ubicacion"
                    value={ubicacion}
                    onChange={handleUbicacionChange}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="nacionalidad"> Nacionalidad:</label>
                <input
                    type="text"
                    id="nacionalidad"
                    value={nacionalidad}
                    onChange={handleNacionalidadChange}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="aceptaPrivacidad"> Acepta privacidad:</label>
                <input
                    type="radio"
                    id="aceptaPrivacidadNo"
                    name='aceptarPrivacidad'
                    value="Si"
                    chacked={aceptaPrivacidad === 'Si'}
                    onChange={handleAceptaPrivacidadChange}
                />
                <label html="aceptarPrivacidadNo">Si</label>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="comoNosConocio"> Como nos conoció:</label>
                <input
                    type="text"
                    id="comoNosConocio"
                    value={comoNosConocio}
                    onChange={handleComoNosConocioChange}
                />
            </div>

            <button type="submit">Enviar</button>

            {formSubmitted && (
                <Link to={`/AdminPage/${DataInscriptionT.id}`} className={style.successMessage}>
                    Enviado correctamente
                </Link>
            )}

        </form>
    );
};

export default RegistrationForm;
