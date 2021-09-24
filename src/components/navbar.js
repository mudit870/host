import React from 'react'
import "./navbar.css"

function Navbar(){
    return (
        <div className="navbar">
                
                <img src="../images/background.jpg"></img>
                <ul>
                    <li className="firstNav">WEB HOSTING</li>
                    <li>CLOUD HOSTING</li>
                    <li className="pnav"><p>ON SALE</p><br/>VPS HOSTING</li>
                    <li>DOMAIN CHECKER</li>
                    <li>WEBSITE BUILDER</li>
                </ul>
                <br/>
        </div>
    )
}

export default Navbar
