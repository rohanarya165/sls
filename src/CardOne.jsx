import React from 'react'
import Cdata from './CdataOne'


export default function CardOne(props) {
  return (
    <>


      


                <div className="card" id="c1">
                  <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                  <div className="card-body">
                    <center>
                      <p className="card-text font-weight-bold">{props.title}</p>
                    </center>
                  </div>
                </div>



              




    </>
  )
}