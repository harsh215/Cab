import React, { useState } from 'react';
import {Link } from "react-router-dom";
import '../App.css';
import Src from './Src';
import Dest from './Destination';
import MinPath from './MinPath';

function Details() {
  const [SourceCode,SetSourceCode]=useState("A");
  const [DestCode,SetDestCode]=useState("B");
  const [Time,setTime]=useState("0");
  const [check,setcheck]=useState(false);
  return (
    <div>
    <h1 className='mainHead'>Book Cab</h1>
    <form action="#">
        <div className="mail">
            <label htmlFor="email" required>
                Enter your Email
            </label><br/>
            <input type="email" id="email" name="email" required onChange={()=>{
              setcheck(true);
            }}></input>
        </div>
        <div className="srcDest">
            <Src SetSourceCode={SetSourceCode}/>
            <Dest SourceCode={SourceCode} SetDestCode={SetDestCode} />
        </div>
    </form>
    <MinPath src={SourceCode} dest={DestCode} setTime={setTime}/>
    <div className="checkCabs">
    {check&&<Link to="/booking" state={{ Time: Time }}><button>Check Cabs</button></Link>}
    </div>
    </div>
  )
}

export default Details
