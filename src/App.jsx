import NavBar from './components/NavBar'
import Home from './components/Home'
import './App.css'
import SoicalLinks from './components/SoicalLinks'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {


  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>

      <SoicalLinks/>
    </div>
  )
}

export default App
