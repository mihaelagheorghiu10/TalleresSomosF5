import React from 'react'
import style from './adminPage.module.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'
// import ReactDOM from "react-dom";
function AdminPage() {
  return (
    <div>
      <Navbar />
      <div className={style.adminPageConteiner}>
        <form className={style.formCreate}>
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
        </form>
        <edit className={style.editCreate}>
          <h2>Editar Taller</h2>
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
        </edit>
      </div>

      <Footer />
    </div>
  )
}

export default AdminPage

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
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement); */
