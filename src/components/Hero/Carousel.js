import React from 'react';
import Carousel from 'nuka-carousel';
import slide1 from './assets/slide1.jpg';
import slide2 from './assets/slide2.jpg'; 
 
const carousel = (props) => {
    return (
        <Carousel
            autoGenerateStyleTag
            dragging
            initialSlideHeight="200px">
            <img src={slide1} alt=""/>
            <img src={slide2} alt="" />
            
        </Carousel>
    )
}

export default carousel;