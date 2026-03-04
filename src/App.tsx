import './App.css'
import Header from './components/Header'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot.tsx';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
       <Skills />
       <Projects />
       <Contact /> 
      </main>
       <Footer />
       <Chatbot />
    </div>
  )
}

export default App