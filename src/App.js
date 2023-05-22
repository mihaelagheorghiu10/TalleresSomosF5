import './App.css'
import Footer from './components/Footer/Footer'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CategoryCards from './components/CategoryCards/CategoryCards'
import beginnerLevel from './assets/images/beginnerLevel.png'

import Navbar from './components/Navbar/Navbar'
import HomePage from './page/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    // <Router>
    <div className="App">
      {/* <h1>"empieza el viaje hacia tu talento digital"</h1> */}
      <Footer />
      <h1>"empieza el viaje hacia tu talento digital"</h1>
      <CategoryCards
        beginnerLevel={beginnerLevel}
        src="img"
        title="hola"
        description="somos f5"
      />

      <BrowserRouter>
        <Routes>
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar /> */}
    </div>
    // </Router>
  )
}

export default App
