import React from 'react'
import moment from "moment"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import '../LandingScreen/landing.css'

AOS.init({
      duration: '2000'
});

const LandingScreen = () => {
      return (
            <div className="hero-image">
                  
                  <div className="landing row justify-content-center text-center">
                        <div className="col-md-9 my-auto">
                              <div className='white-box'>
                                    <h2 style={{ color: "white", fontSize: "130px" }} data-aos='zoom-in'>Tipton Hotel</h2>
                                    <h1 data-aos='zoom-out' >Where Luxuary meets Comfort.</h1>
                              </div>
                              
                        </div>
                  </div>
            </div>
      );
}

export default LandingScreen