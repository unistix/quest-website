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
import CanvasBackground from './components/CanvasBackground'; // <-- Import your background

function App() {

  return (
    <>
      <CanvasBackground />
      <div className="app-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <Router>
          <NavBar />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/gallery" element={<Albums />} />
              <Route path="/tickets" element={<Tickets />} />
            </Routes>
          </div>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App
