import React, { Fragment } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./css/slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
    return (
        <Fragment>
        {/* <div class="carousel-wrapper"> */}
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div id="container">
                    <div className="contents">
                        <div className="offer-contents">
                            <h1>Explore the Seasonal Sale</h1>
                            <p>Upto 70% Off</p>
                            <button className="btn1">Explore</button>
                        </div>
                        <div className="left-contents">
                            <h1>50% Off For Your First Shopping</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry.
                                took a galley of type and scrambled it to make a type specimen book</p>
                            <button className="btn1">Visit Collections</button>
                        </div>
                        <div className="right-contents">
                            <img src="images/watch.png" alt="img"/>
                        </div>
                    </div>
                </div>
                <div id="container">
                    <div className="contents">
                        <div className="offer-contents">
                            <h1>Explore the Seasonal Sale</h1>
                            <p>Upto 70% Off</p>
                            <button className="btn1">Explore</button>
                        </div>
                        <div className="left-contents">
                            <h1>50% Off For Your First Shopping</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry.
                                took a galley of type and scrambled it to make a type specimen book</p>
                            <button className="btn1">Visit Collections</button>
                        </div>
                        <div className="right-contents">
                            <img src="images/watch.png"  alt="img"/>
                        </div>
                    </div>
                </div>
                <div id="container">
                    <div className="contents">
                        <div className="offer-contents">
                            <h1>Explore the Seasonal Sale</h1>
                            <p>Upto 70% Off</p>
                            <button className="btn1">Explore</button>
                        </div>
                        <div className="left-contents">
                            <h1>50% Off For Your First Shopping</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry.
                                took a galley of type and scrambled it to make a type specimen book</p>
                            <button className="btn1">Visit Collections</button>
                        </div>
                        <div className="right-contents">
                            <img src="images/watch.png"  alt="img"/>
                        </div>
                    </div>
                </div>
                <div id="container">
                    <div className="contents">
                        <div className="offer-contents">
                            <h1>Explore the Seasonal Sale</h1>
                            <p>Upto 70% Off</p>
                            <button className="btn1">Explore</button>
                        </div>
                        <div className="left-contents">
                            <h1>50% Off For Your First Shopping</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry.
                                took a galley of type and scrambled it to make a type specimen book</p>
                            <button className="btn1">Visit Collections</button>
                        </div>
                        <div className="right-contents">
                            <img src="images/watch.png"  alt="img"/>
                        </div>
                    </div>
                </div>
                <div id="container">
                    <div className="contents">
                        <div className="offer-contents">
                            <h1>Explore the Seasonal Sale</h1>
                            <p>Upto 70% Off</p>
                            <button className="btn1">Explore</button>
                        </div>
                        <div className="left-contents">
                            <h1>50% Off For Your First Shopping</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry.
                                took a galley of type and scrambled it to make a type specimen book</p>
                            <button className="btn1">Visit Collections</button>
                        </div>
                        <div className="right-contents">
                            <img src="images/watch.png" alt="img" />
                        </div>
                    </div>
                </div>
            </Carousel>
        {/* </div> */}
        </Fragment>
    )
}

export default Slider
