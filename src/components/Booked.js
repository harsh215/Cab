import React from 'react'
import Cab from '../images/cab.webp'
import { useLocation } from "react-router-dom";
function Booked(props) {
  const location = useLocation();
  const propsData = location.state;
  return (
    <div>
      <div className="container">
          <div className="mini-container">
            <h1 className='coloured'> THANK YOU </h1>
            <h1 className='h1class'>FOR BOOKING YOUR CAB</h1>
            <h3 className='coloured'>{`Your Total Fair is ${propsData.cabFinal}`}</h3>
          </div>
          <div className='cabImage'>
              <img src={Cab} alt=" Cab" />
          </div>
      </div>
    </div>
  )
}

export default Booked
