import React from 'react'
import Category from './Category'
import Featured from './Featured'
import Footer from './Footer'
import Header from './Header'
import Slider from './Slider'

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
            <div>
                <Category/>
            </div>
            <div>
                <Featured/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Body