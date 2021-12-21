import './works.scoped.css';
import React, { useState, useEffect } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slick.css";

function Works() {

    const renderSlides = () =>
        [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
            <div className='hi'  >
                <div className='content front'>
                    <div className='top'>
                    </div>
                    <div className='bottom'>
                    </div>
                </div>
                <div className='content back'>
                    <div className='top'>
                        <span>dd</span>
                    </div>
                    <div className='bottom'>
                    </div>
                </div>
            </div>
        ));

    return (
        <div className="Works">
            <div className="main_container">
                <div className="sub_container">
                    <Slider slidesToShow={2}>
                        {renderSlides()}
                    </Slider>
                </div>
            </div>
        </div>


    )
}

export default Works;
