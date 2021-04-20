import React, { Component } from 'react'
import Hero from "./components/Hero.js";
import Download from "./components/Download.js";
import Slider from "./components/Slider.js";
import Search from "./components/Search.js";
import CarouselClass from "./components/Carousel.js";
import Footer from "./components/Footer.js";

 class mbs extends Component {
    render() {
        return (
            <>
            <Hero />
            <CarouselClass />
            <Download />
            <Slider />
            <Search />
            <Footer />
            </>
        )
    }
}


export default mbs