import React from 'react'
import './Banner.css'
import { Banner5 } from '../../../assets/images/images'


const Banner = () => {
  return (
    <>
    <div className="container">
        <div className="row banner">
            <img src={Banner5} alt="Home Page Banner" />
        </div>
           
    </div>
    </>
  )
}

export default Banner