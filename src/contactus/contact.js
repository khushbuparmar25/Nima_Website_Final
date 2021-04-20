import React, { Component } from 'react'
import "./index.css";
import First from "../contactus/first/first";
import HeaderMain from "../contactus/header/header";


export default class contact extends Component {
    render() {
        return (
            <div>
                <HeaderMain />
                <First />
                <div className="Contact_lastDiv">
                    <div className="Contact_footer_upcloud">
                    <p>Powered by Upcloud Technology Pvt Ltd</p>
                    </div>
                </div>
            </div>
        )
    }
}
