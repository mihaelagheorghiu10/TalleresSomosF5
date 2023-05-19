import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './page/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    // <Router>
    <div className="App">
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
