import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Booking from './components/Booking.js';
import Booked from './components/Booked.js';
function App() {
  return (
      <BrowserRouter>
      <Routes>
            <Route index element={<Home/>} />
            <Route path="booking" element={<Booking/>} />
            <Route path="booked" element={<Booked/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
