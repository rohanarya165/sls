import React from 'react'
import logo from "../src/SLS-Assets/Group 243.svg";

export default function Footer() {
    return (
        <div className="m-5">
            <center>
                <img src={logo} alt="logo" id="logo" />
                <p>Over the years, we have added numerous products to our portfolio</p>
                <p>and have served as important technology partners for various</p>
                <p>verticals.</p>
            </center>

            <div class="row">
                <div class="col-sm-3" id="foot">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">ABOUT SLS IN</h5>
                            <p class="card-text"> A SNAPSHOT CSR INITIATIVES CERTIFICATIONS AND TIE-UPS</p>

                        </div>
                    </div>
                </div>
                <div class="col-sm-3" id="foot">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">INDUSTRIES</h5>
                            <p class="card-text"> IOT PLATFORM CLOUD SOLUTIONS E-MOBILITY SOLAR & WIND SMART METERING SMART GRID HOME AUTOMATION SMART STREET LIGHTS RAILWAYS GAMING TRAFFIC SOLUTIONS</p>

                        </div>
                    </div>
                </div>
                <div class="col-sm-3" id="foot">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">SERVICES</h5>
                            <p class="card-text">SERVICES ASIC/FPGA/SOC DESIGN SERVICES HIGH SPEED PCB DESIGN SERVICES SOFTWARE DEVELOPMENT ELECTRONICS MANUFACTURING TESTING AND CALIBRATION ML & AI</p>

                        </div>
                    </div>
                </div>
                <div class="col-sm-3" id="foot">
                    <div class="card">
                        <div class="card-body">

                            <h5 class="card-title">CONTACT US</h5>
                            <p class="card-text"> CAREERS</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>


                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">System Level Solutions Inc. Copyright © 2021.</a>



                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Facebook</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Instagram</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Twitter</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Linkedin</a>
                    </li>
                </ul>
                </div>
                
                </nav>
            </div>

        </div>
    )
}
