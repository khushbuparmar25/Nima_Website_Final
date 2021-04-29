import React, { Component } from 'react';
import Hero from "./Components/Hero/Hero";
import Leaders from "./Components/Leaders/Leaders";
import Forum from './Components/Forum/Forum'

export default class womensforum extends Component {
    render() {
        return (
            <>
                <Hero />
                <Leaders />
                <Forum/>
                {/* <div className="footer_upcloud">Powered by Upcloud Technology Pvt. Ltd.</div> */}
            </>
        )
    }
}
