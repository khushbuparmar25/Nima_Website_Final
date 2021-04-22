import React, { Component } from 'react';
import Lifemembership from "./Lifemembership/lifemembership";
import Search from "./Lifemembership/Search";
import Footer from "./Lifemembership/Footer";

export default class life extends Component {
    render() {
        return (
            <>
                <Lifemembership/>
                <Search/>
                <Footer/>
            </>
        )
    }
}

