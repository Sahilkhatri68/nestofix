import React from 'react'
import star from  "./Images/5star.png";
import "./footer.css"
function Footer() {
  return (
    <div className='mainfooter'>
        <div className='stardiv'>
            <img src={star} className="starimg"></img>
            <h4 className='head3'>Including customers ratings</h4>
        </div>
        <div className='botmfoot'>
            <button className='ratingbtn'>See your ratings</button>
        </div>
    <div>

    </div>
    </div>
  )
}

export default Footer