import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import Process from './pages/Process';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

import Header from './components/Header';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/work' element={<Work />} />
        <Route path='/process' element={<Process />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
