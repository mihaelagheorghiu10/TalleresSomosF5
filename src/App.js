import './App.css'
import HomePage from './page/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
<<<<<<< HEAD
import DataTalleres from './utilities/DataTalleres.json'
import Footer from './components/Footer/Footer'
import Navbar from './components/navbar/Navbar'
=======
>>>>>>> b782b9cbce75e8c29e80e062497056e83caf7e21

import Form from './page/Form/Form'
import  Talleres  from './page/talleres/Talleres'
import EventDetail from './page/EventDetail/EventDetail'


function App() {
  return (
    <div className="App">





      <BrowserRouter>
        <Routes>
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/EventDetail/:level" element={<EventDetail />} />
          <Route path="/" element={<EventDetail />} />
          <Route path="/form" element={<Form />} />
          <Route path="/talleres/:level"element={<Talleres/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
