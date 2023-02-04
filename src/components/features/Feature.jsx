import React from 'react'
import './Feature.css'
import logo4 from '../../assets/logo4.svg'
import logo3 from '../../assets/logo3.svg'
import logo6 from '../../assets/logo6.svg'
import logo2 from '../../assets/logo2.svg'
import logo1 from '../../assets/logo1.svg'

const Feature = () => {
  return (
    <div className="feature">
        <div className="title">
            <h1>Featured In</h1>
        </div>
        <div className="images">
            <img src={logo4} alt="" />
            <img src={logo3} alt="" />
            <img src={logo6} alt="" />
            <img src={logo2} alt="" />
            <img src={logo1} alt="" />
        </div>
    </div>
  )
}

export default Feature