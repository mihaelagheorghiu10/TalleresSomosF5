/* eslint-disable react-hooks/rules-of-hooks */
// import React from 'react'
import style from './adminPage.module.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'
// import ReactDOM from "react-dom";
import React, { useEffect, useState } from 'react'
import './adminPage.module.css'
import { getTalleres } from '../../services/talleres.services'
// import { AuthContext } from '../../components/AuthContext'

function AdminPage() {
  const [DataTalleres, setDataTalleres] = useState([])

  const getAllTalleres = async () => {
    const { data } = await getTalleres()
    setDataTalleres(data)
    console.log(data, 'json')
  }
  useEffect(() => {
    getAllTalleres()
  }, [])

  // const AdminPage = () => {
  // const { user, isAdmin } = useContext(AuthContext)

  const [cards, setCards] = useState([]) // Estado para almacenar las tarjetas
  const [newCard, setNewCard] = useState('') // Estado para el formulario de creación de tarjetas

  // Función para crear una nueva tarjeta
  const createCard = () => {
    // Aquí puedes realizar la lógica para crear una nueva tarjeta, como enviarla al backend o almacenarla en el estado
    const card = { title: newCard }
    setCards([...cards, card])
    setNewCard('')
  }

  // Función para actualizar una tarjeta existente
  const updateCard = (index, updatedCard) => {
    // Aquí puedes realizar la lógica para actualizar una tarjeta, como enviarla al backend o modificarla en el estado
    const updatedCards = [...cards]
    updatedCards[index] = updatedCard
    setCards(updatedCards)
  }

  // Función para eliminar una tarjeta
  const deleteCard = (index) => {
    // Aquí puedes realizar la lógica para eliminar una tarjeta, como enviar una solicitud al backend o eliminarla del estado
    const updatedCards = cards.filter((_, i) => i !== index)
    setCards(updatedCards)
  }

  /* if (!isAdmin()) {
      return (
        <div>
          No tienes permisos de administrador para acceder a esta página.
        </div>
      )
    }

    return (
      <div>
        <h1>Página de administración</h1>
        {/* Formulario para crear una nueva tarjeta */
  // }
  /*  <input
          type="text"
          value={newCard}
          onChange={(e) => setNewCard(e.target.value)}
          placeholder="Título de la tarjeta"
        />
        <button onClick={createCard}>Crear tarjeta</button>

        {/* Lista de tarjetas existentes */
  /* {cards.map((card, index) => (
          <div key={index}>
            <input
              type="text"
              value={card.title}
              onChange={(e) =>
                updateCard(index, { ...card, title: e.target.value })
              }
            />
            <button onClick={() => deleteCard(index)}>Eliminar tarjeta</button>
          </div>
        ))}
      </div>
    ) */

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([])
  const [titulo, setTitulo] = useState([])
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')

  const handleTituloChange = (event) => {
    setTitulo(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }
  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Crear un nuevo objeto de usuario con los datos ingresados
    const newUser = {
      id: Date.now(),
      title: titulo,
      description: description,
      location: location,
    }

    // Agregar el nuevo usuario al estado de datos
    setTitulo([...titulo, newUser])

    // Limpiar los campos del formulario
    setTitulo('')
    setDescription('')
  }

  const handleDelete = (id) => {
    // Filtrar los usuarios para excluir el usuario con el ID proporcionado
    const updatedData = data.filter((user) => user.id !== id)
    setData(updatedData)
  }

  return (
    <div>
      <Navbar />
      <h1>Página de administración</h1>
      <div>No tienes permisos de administrador para acceder a esta página.</div>
      <div className={style.listaTalleres}>
        <h2>Lista de niveles de taller</h2>
        <hr></hr>
        <div className={style.contenedorNivelesTaller}>
          {DataTalleres.map((item) => {
            return (
              <article className={style.nivelTaller}>
                <h3>{item.title}</h3>
                <span>
                  <button>Borrar</button>
                  <button>Editar</button>
                </span>
              </article>
            )
          })}
        </div>
      </div>
      <div className={style.adminPageConteiner}>
        {/*  <form className={style.formCreate}>
       <h2>Crear Taller</h2>
       <label>Titulo del Taller</label>
       <input type="text" placeholder="titulo..."></input>
       <label>Descripcion Taller</label>
       <input type="text" placeholder="descripcion..."></input>
       <label>Location</label>
       <input type="text" placeholder="location..."></input>
       <label>Date</label>
       <input type="date" placeholder="Date..."></input>
       <label>Mode</label>
       <input type="text" placeholder="mode..."></input>
     </form> */}
        <form onSubmit={handleSubmit}>
          <edit className={style.editCreate}>
            <h2>Editar Taller</h2>
            <label>Titulo del Taller</label>
            <input
              type="text"
              placeholder="titulo..."
              value={titulo}
              onChange={handleTituloChange}
            ></input>
            <label>Descripcion Taller</label>
            <input
              type="text"
              placeholder="descripcion..."
              value={description}
              onChange={handleDescriptionChange}
            ></input>
            <label>Location</label>
            <input
              type="text"
              placeholder="location..."
              value={location}
              onChange={handleLocationChange}
            ></input>
            {/* <label>Date</label>
    <input type="date" placeholder="Date..."></input>
    <label>Mode</label>
    <input type="text" placeholder="mode..."></input>  */}
            <button type="submit">Agregar</button>
            {data.map((user) => (
              <tr key={user.id}>
                ,<td>{user.titulo}</td>,<td>{user.description}</td>,
                <td>{user.location}</td>
              </tr>
            ))}
            <button onClick="handleDelete(user.id)">Eliminar</button>
          </edit>
        </form>
      </div>
      <Footer />
    </div>
  )

  // {
  /* export default AdminPage

/* class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: "",
      };
    }
  
    render() {
      return (
        <div className="App">
          <h1>Hello!! {this.state.name}</h1>
          <a href="javascript:;">
            Open Modal
          </a>
        </div>
      );
    }
  } */
  // }

  // {
  /*  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement); */
  /*  import React, { useState } from 'react';
  import './App.css'; */
  // }
}

export default AdminPage
