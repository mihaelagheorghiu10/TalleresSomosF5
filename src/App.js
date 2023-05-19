import './App.css'
import CategoryCards from './components/CategoryCards/CategoryCards';
import beginnerLevel from './assets/images/beginnerLevel.png';
 
function App() {
  return (
    <div className="App">
      <h1>"empieza el viaje hacia tu talento digital"</h1>
      <CategoryCards beginnerLevel={beginnerLevel} src = "img" title = "hola" description = "somos f5" />

    </div>
  )
}

export default App
