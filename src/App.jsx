import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import TrustSignals from './components/sections/TrustSignals'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <TrustSignals />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
