import React from 'react'
import '../App.css';
import Cab from '../images/cab.webp'
import CabsData from "./CabsData"
import { useLocation } from "react-router-dom";
function Booking(props) {
  const location = useLocation();
  const propsData = location.state;
  return (
    <div>
      <div className="container">
          <div className="mini-container">
              <CabsData Time={propsData.Time}/>
          </div>
          <div className='cabImage'>
              <img src={Cab} alt=" Cab" />
          </div>
      </div>
    </div>
  )
}

export default Booking
