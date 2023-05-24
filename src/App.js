import './App.css'
import Footer from './components/Footer/Footer'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CategoryCards from './components/CategoryCards/CategoryCards'
import beginnerLevel from './assets/images/beginnerLevel.png'

import Navbar from './components/Navbar/Navbar'
import HomePage from './page/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DataTalleres from './utilities/DataTalleres.json'


function App() {
  return (
    // <Router>
    <div className="App">
      <Navbar />

      <CategoryCards

        beginnerLevel={beginnerLevel}
        src="img"
        title="hola"
        description="somos f5"
      />

      {DataTalleres.data.map(taller => {return <button key={taller.id}>{taller.title} tiene estos talleres:</button>})}


      <BrowserRouter>
        <Routes>
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />


    </div>
    // </Router>
  )
}

export default App
