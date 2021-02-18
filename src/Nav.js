import React, { useEffect, useState } from 'react'
import "./Nav.css"
function Nav() {
    const [show , handleShow]= useState(false);

    const transitionNavBar = ()=> {
        if( window.scrollY > 100) {
            handleShow(true) ; 
        }
        else 
        handleShow(false)
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar);
        return ()=> window.removeEventListener("scroll",transitionNavBar);
    },[]);

    return (
        <div  className= {`nav ${show && "nav_black"}`}>
            <div className="nav_content"> 
            <img  className="nav__logo"
             src="https://www.reviews.org/app/uploads/2019/07/580b57fcd9996e24bc43c529.png"/>
            <img className="nav__avatar" src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1"/>
            </div>
        </div>
    )
}

export default Nav
