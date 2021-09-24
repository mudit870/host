import React from 'react'
import "./home.css"

function Home(){
    return (
        <div className="homeBody">
            <p>SAVE 82%</p>
            <div className="left">
                <p>New Year Offer
                    <br/>
                    <span>82% OFF</span> Web Hosting
                    <br/>
                    <div className="container">
                    <i class="fas fa-caret-right"></i>
                        <div className="time">
                        
                            <p>00
                                <br/>
                                <span>DAYS</span>
                            </p>
                        </div>
                        <div className="time">
                            <p>16
                                <br/>
                                <span>HOURS</span>
                            </p>
                        </div>
                        <div className="time">
                            <p>18
                                <br/>
                                <span>MINUTES</span>
                            </p>
                        </div>
                        <div className="time">
                            <p>29
                                <br/>
                                <span>SECONDS</span>
                            </p>
                        </div>
                        <i class="fas fa-caret-left"></i>
                        </div>
                    <br/>
                </p>
                <button>GET STARTED NOW</button>
            </div>
            <div className="right">
            <i className="fas fa-dollar-sign"></i>
                <p><span>1 </span><p className="ppp">45
                <br/>/mo</p></p>
            </div>
        </div>
    )
}

export default Home
