import React from 'react'
import './Header.css'
import { Banner1,Banner2,Banner3,Banner4 } from '../../assets/images/images'


const Header = () => {
  return (
    <>
    <div className="container-fluid ">
        <div className="row header">
            <img src={Banner3} alt="Home Page Banner" />
            <div className="header-btn">
              <button className="btn btn-outline-primary">Shop Now</button>
              <button className="btn btn-outline-secondary">Ask Bot</button>
            </div>
        </div>
           
    </div>
    </>
  )
}

export default Header