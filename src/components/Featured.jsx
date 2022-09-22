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
    <div>
      <div className='topinfo'>
        <div className="leftinfo"><h1>Featured</h1></div>
        <div className=""><button className='btnviewall'>View all</button></div>
      </div>
      <div>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          dots={true}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
        >
            <div className='fetcard'>
          <div className='outrcard'>
            <img src={card1} className="cardimg"></img>
          </div>
          <div className='cardinfo'>
            <div >
              <div className="starleft"><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
              <div className="desc">Blockage in Toiled seat</div>
            </div>
            <div>
              <div>
              <h5> {Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "INR",
                          }).format(500)}</h5>
              </div>
            </div>
          </div>
        </div>

        <div className='fetcard'>
          <div className='outrcard'>
            <img src={card1} className="cardimg"></img>
          </div>
          <div className='cardinfo'>
            <div >
              <div className="starleft"><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
              <div className="desc">Blockage in Toiled seat</div>
            </div>
            <div>
              <div>
              <h5> {Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "INR",
                          }).format(500)}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='fetcard'>
          <div className='outrcard'>
            <img src={card1} className="cardimg"></img>
          </div>
          <div className='cardinfo'>
            <div >
              <div className="starleft"><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
              <div className="desc">Blockage in Toiled seat</div>
            </div>
            <div>
              <div>
              <h5> {Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "INR",
                          }).format(500)}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='fetcard'>
          <div className='outrcard'>
            <img src={card1} className="cardimg"></img>
          </div>
          <div className='cardinfo'>
            <div >
              <div className="starleft"><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
              <div className="desc">Blockage in Toiled seat</div>
            </div>
            <div>
              <div>
              <h5> {Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "INR",
                          }).format(500)}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='fetcard'>
          <div className='outrcard'>
            <img src={card1} className="cardimg"></img>
          </div>
          <div className='cardinfo'>
            <div >
              <div className="starleft"><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
              <div className="desc">Blockage in Toiled seat</div>
            </div>
            <div>
              <div>
              <h5> {Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "INR",
                          }).format(500)}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='fetcard'>
          <div className='outrcard'>
            <img src={card1} className="cardimg"></img>
          </div>
          <div className='cardinfo'>
            <div >
              <div className="starleft"><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
              <div className="desc">Blockage in Toiled seat</div>
            </div>
            <div>
              <div>
              <h5> {Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "INR",
                          }).format(500)}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='fetcard'>
          <div className='outrcard'>
            <img src={card1} className="cardimg"></img>
          </div>
          <div className='cardinfo'>
            <div >
              <div className="starleft"><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
              <div className="desc">Blockage in Toiled seat</div>
            </div>
            <div>
              <div>
              <h5> {Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "INR",
                          }).format(500)}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='fetcard'>
          <div className='outrcard'>
            <img src={card1} className="cardimg"></img>
          </div>
          <div className='cardinfo'>
            <div >
              <div className="starleft"><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
              <div className="desc">Blockage in Toiled seat</div>
            </div>
            <div>
              <div>
              <h5> {Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "INR",
                          }).format(500)}</h5>
              </div>
            </div>
          </div>
        </div>
           
        </InfiniteCarousel>
        
      </div>
    </div>
  )
}

export default Featured