import React, { useState } from 'react';
import style from './RegistrationForm.module.css'
import { getInscriptionT  } from '../../services/talleres.services';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        whatsapp: '',
        genero: '',
        email: '',
        ubicacion: '',
        nacionalidad: '',
        aceptaPrivacidad: false,
        comoNosConocio: '',
    });

    const [DataInscriptionT, setDataInscriptionT] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const getAllInscription = async () => {
        const { data } = await getInscriptionT();
        setDataInscriptionT(data.registrationForm);
        console.log(data, "json");
    };

    useEffect(() => {
        getAllInscription();
    }, []);

    const { nombre, whatsapp, genero, email, ubicacion, nacionalidad, aceptaPrivacidad, comoNosConocio } = formData;

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Nombre completo:', nombre);
        console.log('Email:', email);
        console.log('Whatsapp:', whatsapp);
        console.log('Genero:', genero);
        console.log('Ubicación:', ubicacion);
        console.log('Nacionalidad:', nacionalidad);
        console.log('Acepta privacidad:', aceptaPrivacidad);
        console.log('Como nos conoció:', comoNosConocio);

        try {
            
            await axios.post('https://64843740ee799e3216266317.mockapi.io/api/InscriptionT', formData);

            setFormSubmitted(true);

    
            setFormData({
                nombre: '',
                whatsapp: '',
                genero: '',
                email: '',
                ubicacion: '',
                nacionalidad: '',
                aceptaPrivacidad: false,
                comoNosConocio: '',
            });

        } catch (error) {
            console.error(error);
        }
    };

    const opcionesGenero = [
        { value: '', label: 'Seleccione' },
        { value: 'H', label: 'Hombre' },
        { value: 'M', label: 'Mujer' },
        { value: 'O', label: 'Otro' },
    ];

    return (
        <form onSubmit={handleSubmit} className={style.container}>
            <div className={style.inputContainer}>
                <label htmlFor="nombre">Nombre completo:</label>
                <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleChange} />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="email">Email:</label>
                <input required type="email" id="email" name="email" value={email} onChange={handleChange} />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="whatsapp">Whatsapp:</label>
                <input type="whatsapp" id="whatsapp" name="whatsapp" value={whatsapp} onChange={handleChange} />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="genero">Como se identifica:</label>
                <select id="genero" name="genero" value={genero} onChange={handleChange}>
                    {opcionesGenero.map((opcion) => (
                        <option key={opcion.value} value={opcion.value}>
                            {opcion.label}
                        </option>
                    ))}</select>
                
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="ubicacion"> Ubicación:</label>
                <input required type="text" id="ubicacion" name="ubicacion" value={ubicacion} onChange={handleChange} />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="nacionalidad"> Nacionalidad:</label>
                <input required type="text" id="nacionalidad" name="nacionalidad" value={nacionalidad} onChange={handleChange} />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="aceptaPrivacidad"> Acepta privacidad:</label>
                <input
                required
                    type="checkbox"
                    id="aceptaPrivacidad"
                    name="aceptaPrivacidad"
                    checked={aceptaPrivacidad}
                    onChange={handleChange}
                />
                <label htmlFor="aceptaPrivacidad">Si</label>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="comoNosConocio"> Como nos conoció:</label>
                <input type="text" id="comoNosConocio" name="comoNosConocio" value={comoNosConocio} onChange={handleChange} />
            </div>

            <button type="submit">Enviar</button>

            {formSubmitted && (
                <Link to={`/AdminPage/`} className={`${style.successMessage}`}>
                    Enviado correctamente
                </Link>
            )}
        </form>
    );
};

export default RegistrationForm;
