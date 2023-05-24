import './App.css'
import HomePage from './page/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DataTalleres from './utilities/DataTalleres.json'

import EventDetail from './page/EventDetail/EventDetail'
import Form from './page/Form/Form'

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <CategoryCards


        beginnerLevel={beginnerLevel}
        src="img"
        title="hola"
        description="somos f5"
      /> */}


      <BrowserRouter>
        <Routes>
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/eventDetail" element={<EventDetail />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
