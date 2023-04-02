import React from 'react'
import Details from './Details'
import Cab from '../images/cab.webp'
function Home() {
  return (
    <div>
        <div className="container">
            <div className="mini-container">
                <Details/>
            </div>
            <div className='cabImage'>
                <img src={Cab} alt=" Cab" />
            </div>
        </div>
    </div>
  )
}

export default Home;
