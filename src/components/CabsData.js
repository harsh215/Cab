import React, { useState } from 'react'
import {Link } from "react-router-dom";
import Data from './Data.json';
import "../index.css"
import MICRO from '../images/MICRO.png';
import SEDAN from '../images/SEDAN.png';
import VAN from '../images/VAN.png';
import ROADSTER from '../images/ROADSTER.png';
import SUPERCAR from '../images/SUPERCAR.png';

function CabsData(props) {
  
  const names = [MICRO, SEDAN, VAN, ROADSTER,SUPERCAR];
  const [cabFinal,setCabFinal]=useState("0");
  const [check,setCheck]=useState(false);
  return (
<div className='cabsMain'>
      <h1>Choose Cab</h1>
      {
        Data.map((cab,index) => (
            <div className='cabs' key={index}>
                <input type="radio" id="html" name="fav_language" value="HTML" onChange={(e)=>(setCabFinal(cab.cost*props.Time))} onClick={()=>(setCheck(true))}/>
                <div>
                    <img src={names[cab.id]} alt={`${cab.name} CabImage`} />
                </div>
                <div className='cabsText'>
                    <div className="cabName">{cab.name}</div>
                    <div className="cabCost">{cab.costShow}</div>
                </div>
            </div>
            
      ))
    }
    {check?<button className='breakUp' onClick={() => alert(`Total Time ${props.Time} \n Car Fair per min ${cabFinal/props.Time}$\n Total Fair ${cabFinal}$ `)}>view Breakup</button>:" "}
    {check?<Link to="/booked" state={{ cabFinal: cabFinal }}><button className="total">Total Fair : {cabFinal}$</button></Link>:" "}

 </div>
  )
}

export default CabsData
