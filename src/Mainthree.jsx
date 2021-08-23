import React from 'react'
import CardOne from './CardOne'
import Cdata from './CdataOne'

export default function Mainthree() {
    return (
        <>
            <div className="m-5">
                <h2 className="mainThree">Our rich portfolio covers multiple segments</h2>
                <h5>Catering to multiple industrial use cases, System Level Solutions provides a wide array of products and services.</h5>


                
        
           
                

              
                {
                    Cdata.map((val, ind) => {
                        return <CardOne key={ind} imgsrc={val.imgsrc} title={val.title} />
                    })
                }
                
                
        
         
     









                <center><button type="button" class="btn btn-primary btn-lg">Know More →</button></center>
            </div>
        </>
    )
}
