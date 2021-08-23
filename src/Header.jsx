import React from 'react'
import web from "../src/SLS-Assets/scroll.svg"


//<img src={web} alt="header" />

export default function Header() {
    return (
        <>
            
                <center>
                    <header className="bg-dark p-0 text-white bg-opacity-50% " >
                        <div className="header " id="head">

                            <h2>
                                All-IN-ONE SOLUTION PROVIDER FOR YOUR TECHNOLOGICAL NEEDS SYSTEM LEVEL SOLUTIONS
                            </h2>
                            <center>
                            <p id="headP">Industry leaders in providing solutions catering to the domains of intellectual property, hardware design & prototyping, software design, and manufacturing.</p>
                            </center>
                            <br /><br /><br /><br />
                            <img src={web} alt="scroll" id="scroll" />
                        </div>
                    </header>
                </center>
            
        </>
    )
}
