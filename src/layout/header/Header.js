import React from 'react'
import './Header.css'
import Hover_Btn from '../../components/common/Buttons/Hover_Btn'
import { Banner1,Banner2,Banner3,Banner4 } from '../../assets/images/images'
import Simple_Btn from '../../components/common/Buttons/Simple_Btn'


const Header = () => {
  return (
    <>
    <div className="container-fluid ">
        <div className="row header">
            <img src={Banner3} alt="Home Page Banner" />
            <div className="header-btn">
              <Hover_Btn/>
              <Simple_Btn title='Ask Bot'/>
            </div>
        </div> 
    </div>
    </>
  )
}
export default Header