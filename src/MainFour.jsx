import React from 'react'
import girl from "../src/SLS-Assets/thisisengineering-raeng-ZPeXrWxOjRQ-unsplash.svg"

export default function MainFour() {
  return (
    <div className="m-5" id="m4">
    <div>

      <h2 id="m4">EXPANDING THE CORE OF OUR PRIMARY OFFERINGS</h2>

      <ul class="nav flex-column">

        <li class="nav-item">
          <a class="nav-link" href="#">ASIC/FPGA/SoC Design Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">High Speed PCB Design Services</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Software Development</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Electronics Manufacturing</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Testing and Calibration</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ML & AI</a>
        </li>

      </ul>
    </div>

      <div class="card" id="girl" >
        <img src={girl} class="card-img-top" alt={girl}  />
        <div class="card-body">
          <p class="card-text">Forming the core of our technical expertise, our ready-to-integrate, rich turnkey offerings cover a vast range of target platforms.</p>
        </div>
      </div>

      

    </div>
  )
}

