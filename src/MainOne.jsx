import React from 'react'
import Navbar from './Navbar'
import guy from "../src/SLS-Assets/side-view-of-data-analyst-pointing-with-finger-at--4DGBGUW.svg"










export default function MainOne() {

   

    return (
        <>
            <div className="mainOne">
                <Navbar />
                <h2 className="m1">TECHNOLOGY PARTNERS IN HARDWARE AND SOFTWARE OFFERINGS</h2>

                <p className="m1" id="nb">Serving as a turnkey solutions provider for the past 20 years.</p>

                <div className="m1">
                <h5 id="nb">We specialize in-</h5>
                    <ul id="nb">
                        <li>Research & Development</li>
                        <li>Product Design</li>
                        <li>Manufacturing</li>
                    </ul>
                </div>

                <h2 className="m1">INTEGRATION SPECIALIST ACROSS VARIOUS VERTICALS</h2>
                <p id="nb" className="m1">Assisting companies to avoid pitfalls in the product design and development phase, our experienced team at System Level Solutions uses innovation across levels to materialize the creative perspective of a client.</p>

                <img src={guy} alt="guy" width= "1046px" height= "499px" id="m1img" />
                <h1 id="nb2" >RESEARCH</h1>



            </div>
          
         

        </>
    )
}
