import React from 'react'
function Src(prop) {
  const {SetSourceCode}=prop;
  const paths = ['A','B','C','D','E','F'];
  return (
    <div className="src ">
        <label htmlFor="source">Enter your Location</label><br/>
        <select required selcted="none" id="Source" name="SrcLocation" onChange={(e)=>SetSourceCode(e.target.value)}>
        {paths.map((s,index) => (
            <option value={s} key={index} required>{s}</option>
          ))}
        </select>
    </div>
  )
}

export default Src
