import React from 'react'
import AppBody from '../routes'
import Header from '../Components/Header'
import './Applayout.css'
const Applayout = () => {
    return (
        <div>
            <Header/>
            <div style={{marginTop:"100px"}}>
                <AppBody/>
            </div>            
            <div className="footer_upcloud">Powered by Upcloud Technology Pvt. Ltd.</div>
        </div>
    )
}

export default Applayout
