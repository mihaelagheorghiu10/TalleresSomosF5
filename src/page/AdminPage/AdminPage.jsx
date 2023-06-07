// import React from 'react'
import style from './adminPage.module.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'
// import ReactDOM from "react-dom";
import React, { useState } from 'react'
import './adminPage.module.css'

function AdminPage() {
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
}

{
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
}

{
  /*  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement); */
  /*  import React, { useState } from 'react';
  import './App.css'; */
}

export default AdminPage
