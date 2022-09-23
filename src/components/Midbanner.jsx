import React from 'react'
import "./midbanner.css"
import midbanner from  "./Images/midbanner.jpg"
function Midbanner() {
  return (
    <div className='outerban'>
        <div className='insideban'>
            <img src={midbanner} className="banimg"></img>
        </div>
    </div>
  )
}

export default Midbanner