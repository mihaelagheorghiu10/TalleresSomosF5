import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  )
}

export default App
