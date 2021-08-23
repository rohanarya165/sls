import React from 'react'
import web from "../src/SLS-Assets/Group 241.svg"

export default function Navbar() {
    return (
        <>  <div>
            <nav className="navbar navbar-expand-lg  ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={web} alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" id="nb" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="nb" href="#" >About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="nb" href="#">Industries</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="nb" href="#">Services</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}
