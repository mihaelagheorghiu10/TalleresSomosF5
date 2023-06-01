import './App.css'
import HomePage from './page/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
