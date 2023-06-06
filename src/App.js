import './App.css'
import HomePage from './page/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Form from './page/Form/Form'
<<<<<<< HEAD
import AdminPage from './page/AdminPage/AdminPage'
=======
import  Talleres  from './page/talleres/Talleres'
import EventDetail from './page/EventDetail/EventDetail'

>>>>>>> b782b9cbce75e8c29e80e062497056e83caf7e21

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
<<<<<<< HEAD
          <Route path="/adminPage" element={<AdminPage />} />
=======
          <Route path="/talleres/:level"element={<Talleres/>}/>
>>>>>>> b782b9cbce75e8c29e80e062497056e83caf7e21
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
