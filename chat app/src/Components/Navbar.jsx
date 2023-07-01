import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="name-app"> Project X </span>
            <div className="user">
                <img src="https://www.merchandisingplaza.com/40578/4/T-shirt-South-Park-T-shirt-SOUTH-PARK-Kenny-Face-l.jpg" alt="" className="user-pic"/>
                <span className="user-name"> Davide </span>  
                <button className="navbar-button"> Logout </button> 
            </div>
            
        </div>


    )
}
export default Navbar;