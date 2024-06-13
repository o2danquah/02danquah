
import './App.css'
import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Home from './Pages/Home'

function App() {
 
  return (
    <div className='App'>
    <>
    <NavBar/>
    <Hero/>
    <Home/>
    <Resume/>
    <Projects/>
    </>
    
  </div>
  )
}

export default App
