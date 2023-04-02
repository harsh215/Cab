import React from 'react'

function Destination(props) {
    const {SourceCode,SetDestCode,setcheck2}=props;
    const paths = ['B','A','C','D','E','F'];
  return (
    <div className="dest">
    <label htmlFor="destination">Enter your Destination</label><br/>
    <select required id="dest" name="destLocation" onChange={(e)=>SetDestCode(e.target.value)} onclick={()=>{setcheck2(true)}}>
    {paths.map((s,index) => {
        if(s!==SourceCode){
        return <option value={s} key={index}>{s}</option>
        }
        return null;
    })}
    </select>
    </div>
  )
}

export default Destination
