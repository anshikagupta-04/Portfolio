import './components/style.css'
import About from './components/About'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Experience from './components/Experience'
import CanvasCursor from './components/CanvasCursor'
import Contact from './components/Contact'
import Project from './components/Project'
// import Portfolio from './components/Portfolio'



function App() {
  return (
    <div className='w-full'>
      <CanvasCursor/>
      {/* <Portfolio/> */}
      <Navbar />
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='max-w-[1140px] '>
          <Landing />
          <About />
          <Skills />
          <Project/>
          <Experience/>
          <Contact/>
        </div>
      </div>
    </div>
  )
}

export default App
