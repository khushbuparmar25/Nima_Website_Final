import React from 'react'
import AppBody from '../routes'
import Header from '../Components/Header'
import './Applayout.css'
const Applayout = () => {
    return (
        <div>
            <Header/>
            <AppBody/>
            <div className="footer_upcloud">Powered by Upcloud Technology Pvt. Ltd.</div>
        </div>
    )
}

export default Applayout
