import Navbar from './components/navbar'
import './App.css'
import Hero from './components/Hero'
import Collection from './components/collection'
import Top_Collection from './components/top_collection'
import Creators_seller from './components/creators_seller'
import Accordion from './components/Q&A'
import Footer from './components/footer'
import Contact from './components/contact'

function App() {
  return (
    <div >
        <Navbar />
        <Hero />
        <Top_Collection />
        <Collection />
        <Creators_seller />
        <Accordion />
        <Contact />
        <Footer />
        <div className='body-bg-shape'></div>
    </div>
  )
}

export default App
