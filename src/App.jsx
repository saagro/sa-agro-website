import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import About from './pages/About'
import Contact from './pages/Contact'
import Consulting from './pages/Consulting'
import Partnerships from './pages/Partnerships'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-primary">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/partnerships" element={<Partnerships />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
