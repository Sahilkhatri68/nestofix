import React from 'react'
import Category from './Category'
import Featured from './Featured'
import Footer from './Footer'
import Header from './Header'
import Slider from './Slider'
import "./body.css"
import Ourservice from './Ourservice'
import Midbanner from './Midbanner'
function Body() {
  return (
    <div>
        <div >
            <div>
                <Header/>
            </div>
            <div>
                <Slider/>
            </div>
            <div  >
                <Category/>
            </div>
            <div  >
                <Midbanner/>
            </div>
            <div >
                <Featured/>
            </div>
            <div >
                {/* <Ourservice/> */}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Body