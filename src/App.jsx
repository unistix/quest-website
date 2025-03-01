// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import Home from "./pages/home/Home";
import AboutUs from './pages/about/About';
import Artists from './pages/artists/Artists';
//import Events from './pages/events/Events';
import Albums from './pages/albums/Albums';
import Tickets from './pages/tickets/Tickets';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        
      <Router>
      <NavBar />
      <div className='main'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/gallery" element={<Albums/>} />
        <Route path="/tickets" element={<Tickets/>} />
        {/*Merch section goes here */}
      </Routes>
      </div>
    </Router>
    <Footer></Footer>
      </div>
     
    </>
  )
}

export default App
