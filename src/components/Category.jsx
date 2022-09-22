import React from 'react'
import "./category.css"
import vec from "./Images/vec14.jpg"
import vec1 from "./Images/vec2.jpg"
import vec2 from "./Images/vec3.jpg"
import vec3 from "./Images/vec4.jpg"
import vec4 from "./Images/vec5.jpg"
import vec5 from "./Images/vec6.jpg"
import vec6 from "./Images/vec7.jpg"
import vec7 from "./Images/vec8.jpg"
import vec8 from "./Images/vec9.webp"
import vec9 from "./Images/vec12.jpg"
// import vec10 from "./Images/vec13.jpg"
function Category() {
    return (
        <div className='maincat'>
            <div className="cathead">
                <div>  <h1>Top Categories</h1></div>
                <div><button className='btnview'>View all</button></div>
            </div>
            <div className="itemcat">
                <div className='carditem'>
                    <div className="borddv">
                        <img src={vec} className="itmimg" />
                    </div>
                    <div className='botmcont'><p className='para'>Appliance Service</p></div>
                </div>
                <div className='carditem'>
                    <div className="borddv">
                        <img src={vec2} className="itmimg" />
                    </div>
                    <div className='botmcont'><p className='para'>Carpenter Service</p></div>
                </div>
                <div className='carditem'>
                    <div className="borddv">
                        <img src={vec3} className="itmimg" />
                    </div>
                    <div className='botmcont'><p className='para'>Electrician Service</p></div>
                </div>
                <div className='carditem'>
                    <div className="borddv">
                        <img src={vec4} className="itmimg" />
                    </div>
                    <div className='botmcont'><p className='para'>Home Cleaning</p></div>
                </div>
                <div className='carditem'>
                    <div className="borddv">
                        <img src={vec5} className="itmimg" />
                    </div>
                    <div className='botmcont'><p className='para'>Paint Service</p></div>
                </div>
                <div className='carditem'>
                    <div className="borddv">
                        <img src={vec8} className="itmimg" />
                    </div>
                    <div className='botmcont'><p className='para'>Plumbing Service</p></div>
                </div>
                {/* <div className='carditem'>
                    <div className="borddv">
                        <img src={vec9} className="itmimg" />
                    </div>
                    <div className='botmcont'><p className='para'>Renovation Service</p></div>
                </div> */}
            </div>
        </div>
    )
}

export default Category