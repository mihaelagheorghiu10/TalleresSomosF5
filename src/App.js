import './App.css'
import HomePage from './page/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EventDetail from './page/EventDetail/EventDetail'

function App() {
  return (
    <div className="App">
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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
