import React from 'react'
import web from "../src/SLS-Assets/man-worker-firld-by-solar-panels.svg"

export default function MainTwo() {
    return (
        <>
            <div >
                <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            
                            <img src={web} class="d-block w-100 " alt="..." />
                            
                            <div class="carousel-caption d-none d-md-block">
                                <h2>Reshaping the future of THE world</h2>
                                <p>We aim to leverage technology as a tool to build solutions that have the potential of bringing a transformational shift across sectors.</p>
                                <p>MARKET LEADERS IN MULTIPLE PRODUCT DOMAINS</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={web} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                            <h2>Reshaping the future of THE world</h2>
                                <p>We aim to leverage technology as a tool to build solutions that have the potential of bringing a transformational shift across sectors.</p>
                                <p>MARKET LEADERS IN MULTIPLE PRODUCT DOMAINS</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={web} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                            <h2>Reshaping the future of THE world</h2>
                                <p>We aim to leverage technology as a tool to build solutions that have the potential of bringing a transformational shift across sectors.</p>
                                <p>MARKET LEADERS IN MULTIPLE PRODUCT DOMAINS</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>
    )
}
