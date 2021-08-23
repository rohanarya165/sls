import React from 'react'
import hand from "../src/SLS-Assets/thisisengineering-raeng-sbVu5zitZt0-unsplash.svg"
import nasa from "../src/SLS-Assets/nasa-Q1p7bh3SHj8-unsplash.svg"
import engine from "../src/SLS-Assets/thisisengineering-raeng-Kzx7m3JwkcQ-unsplash.svg"
import zig from "../src/SLS-Assets/NoPath.c6058ac7.svg"
import zil from "../src/SLS-Assets/download (1).svg"
import int from "../src/SLS-Assets/download (2).svg"



export default function MainFive() {
    return (
        <div className="mainFive" >
            <h2 id="m5">Get acquainted with industry trends in real-time</h2>
            <p>Our newsroom is designed to keep you updated about every major or minor breakthrough in the related industries.</p>

            <div>
                <div class="card text-center">
                    <div class="card-header">
                        <ul class="nav nav-pills card-header-pills">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">All</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">NEWS & EVENTS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CSR</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">BLOGS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CASE STUDIES</a>
                            </li>

                        </ul>
                    </div>

                    <div class="row">
                        <div class="col-sm-4">
                            <div class="card-body">
                                <img src={hand} alt="hand" />
                                <center>
                                    <a href="#" class="btn btn-primary">CASE STUDY</a>
                                    <h5 class="card-title">Heading</h5>
                                    <p class="card-text">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <a href="">Read More</a>
                                </center>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card-body">
                                <img src={nasa} alt="hand" />
                                <center>
                                    <a href="#" class="btn btn-primary" id="blog">BLOG</a>
                                    <h5 class="card-title">Heading</h5>
                                    <p class="card-text">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <a href="">Read More</a>
                                </center>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card-body">
                                <img src={engine} alt="hand" />
                                <center>
                                    <a href="#" class="btn btn-primary" >CASE STUDY</a>
                                    <h5 class="card-title">Heading</h5>
                                    <p class="card-text">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <a href="">Read More</a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="m5">

            <h2 className="mainThree" >PARTNERSHIP & ASSOCIATIONS</h2>
            <p >Using our robust in-house expertise to develop pioneering solutions catering to various business domains.</p>
            </div>   

            <div>
                <div class="row row-cols-1 row-cols-md-3 g-4">

                    <div id="m5logo">
                        <div class="card h-100">
                            <img src={zil} class="card-img-top" alt="..." />

                        </div>
                    </div>

                    <div id="m5logo">
                        <div class="card h-100">
                            <img src={zig} class="card-img-top" alt="..." />

                        </div>
                    </div>

                    <div id="m5logo">
                        <div class="card h-100">
                            <img src={int} class="card-img-top" alt="..." />

                        </div>
                    </div>

                </div>
            </div>
        </div>

       


    )
}
