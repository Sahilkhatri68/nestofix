import React from 'react'
import "./featured.css";
import InfiniteCarousel from 'react-leaf-carousel';
import vec5 from "./Images/vec6.jpg"
import vec6 from "./Images/vec7.jpg"
import card1 from "./Images/card1.jpg"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
function Featured() {
  return (
    <div className='maintop'>
      <div className='topinfo'>
        <div className="leftinfo"><h1>Featured</h1></div>
        <div className=""><button className='btnviewall'>View all</button></div>
      </div>
      <div className='cardcont'>
      <div className='fetcard'>
          <div className='outrcard'>
            <div className='outerfloat'>
              <div className='floatdiv'><marquee className="marque">Enter Service</marquee></div>
              </div>
          </div>
          <div className='cardinfo'>
            <div >
              <div className="starleft"><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
              <div className="desc">Sanitary </div>
            </div>
            <div>
              <div className="pricee">
              <h6 style={{marginTop:4}}> {Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "INR",
                          }).format(500)}</h6>
              </div>
            </div>
          </div>
        </div>
      <div className='fetcard'>
          <div className='outrcardone'>
            <div className='outerfloat'>
              <div className='floatdiv'><marquee className="marque">Enter Service</marquee></div>
              </div>
          </div>
          <div className='cardinfo'>
            <div >
              <div className="starleft"><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
              <div className="desc">Carpenter </div>
            </div>
            <div>
              <div className="pricee">
              <h6 style={{marginTop:4}}> {Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "INR",
                          }).format(500)}</h6>
              </div>
            </div>
          </div>
        </div>
      <div className='fetcard'>
          <div className='outrcardtwo'>
            <div className='outerfloat'>
              <div className='floatdiv'><marquee className="marque">Enter Service</marquee></div>
              </div>
          </div>
          <div className='cardinfo'>
            <div >
              <div className="starleft"><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
              <div className="desc">Electrician </div>
            </div>
            <div>
              <div className="pricee">
              <h6 style={{marginTop:4}}> {Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "INR",
                          }).format(500)}</h6>
              </div>
            </div>
          </div>
        </div>
      <div className='fetcard'>
          <div className='outrcardthree'>
            <div className='outerfloat'>
              <div className='floatdiv'><marquee className="marque">Enter Service</marquee></div>
              </div>
          </div>
          <div className='cardinfo'>
            <div >
              <div className="starleft"><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
              <div className="desc">Construction </div>
            </div>
            <div>
              <div className="pricee">
              <h6 style={{marginTop:4}}> {Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "INR",
                          }).format(500)}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured