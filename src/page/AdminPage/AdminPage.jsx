import style from './adminPage.module.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'
// import ReactDOM from "react-dom";
import React, { useEffect, useState } from 'react'
import './adminPage.module.css'
import Register from '../../components/register/Register'
import { creatTaller, getTalleres } from '../../services/talleres.services'
// import { AuthContext } from '../../components/AuthContext'

function AdminPage() {
  const [DataTalleres, setDataTalleres] = useState([])
  const [DataTemp, setDataTemp] = useState({})

  const getAllTalleres = async () => {
    const { data } = await getTalleres()
    setDataTemp(data[0])
    setDataTalleres(data[0].nivelesDeTaller)
    console.log(data, 'json')
  }
  useEffect(() => {
    getAllTalleres()
  }, [])

  // const AdminPage = () => {
  // const { user, isAdmin } = useContext(AuthContext)

  const [cards, setCards] = useState([]) // Estado para almacenar las tarjetas
  const getAllCards = async () => {
    const { data } = await getTalleres()
    setDataTalleres(data)
    console.log(data, 'json')
  }
  useEffect(() => {
    getAllTalleres()
  }, [])

  const [newCard, setNewCard] = useState('')
  // Función para crear una nueva tarjeta
  const createCard = () => {
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

  /*  const isAdmin = () => {
    return false
  }
  if (!isAdmin()) {
    return (
      <div>No tienes permisos de administrador para acceder a esta página.</div>
    )
  }

  return (
    <div>
      <h1>Página de administración</h1>
      {/* Formulario para crear una nueva tarjeta */

  /*  <input
        type="text"
        value={newCard}
        onChange={(e) => setNewCard(e.target.value)}
        placeholder="Título de la tarjeta"
      />
      <button onClick={createCard}>Crear tarjeta</button>

      {/* Lista de tarjetas existentes *}
     /*  {cards.map((card, index) => (
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
    </div> */
  // )

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([])
  const [titulo, setTitulo] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [mode, setMode] = useState('')

  const handleDateChange = (event) => {
    setDate(event.target.value)
  }
  const handleModeChange = (event) => {
    setMode(event.target.value)
  }
  const handleTituloChange = (event) => {
    setTitulo(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }
  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let DataTalleresClon = DataTemp
    console.log(DataTalleresClon)

    const newTaller = {
      id: Date.now(),
      title: titulo,
      description: description,
      location: location,
      date: date,
      mode: mode,
    }
    console.log(newTaller)
    const { data } = await creatTaller({})
    console.log(data, 'response')
    console.log(DataTalleresClon, 'clon')

    // Agregar el nuevo usuario al estado de datos
    // setTitulo([...titulo, newUser])

    // Limpiar los campos del formulario
    setTitulo('')
    setDescription('')
    setLocation('')
    setDate('')
    setMode('')
  }

  const handleDeleteData = (id) => {
    // Filtrar los usuarios para excluir el usuario con el ID proporcionado
    const updatedData = data.filter((user) => user.id !== id)
    setData(updatedData)
  }
  const handleDelete = (id) => {
    // Filtrar los talleres para excluir el taller con el ID proporcionado
    const updatedDataTalleres = DataTalleres.filter((item) => item.id !== id)
    setDataTalleres(updatedDataTalleres)
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
            <label>Date</label>
            <input
              type="date"
              placeholder="date..."
              value={date}
              onChange={handleDateChange}
            ></input>
            <label>Mode</label>
            <input
              type="text"
              placeholder="mode..."
              value={mode}
              onChange={handleModeChange}
            ></input>
            <button type="submit">Agregar</button>
            {data.map((user) => (
              <tr key={user.id}>
                ,<td>{user.titulo}</td>,<td>{user.description}</td>,
                <td>{user.location}</td>,<td>{user.date}</td>,
                <td>{user.mode}</td>
              </tr>
            ))}
            <button onClick="handleDelete(user.id)">Eliminar</button>
          </edit>
        </form>
      </div>
      <Register/>
      <Footer />
    </div>
  )
}

export default AdminPage
