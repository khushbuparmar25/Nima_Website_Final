import React,{ useState} from 'react';
import nima_icon from '../nima_icon.png'; 
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [newsDropdown, setNewsDropdown] = useState(false)
    const [downloadDropdown, setDownloadDropdown] = useState(false)
    const [nimaDropdown, setNimaDropdown] = useState(false)
    const [membershipDropdown, setMembershipDropdown] = useState(false)

    
    return (
        <div>
            <nav className={`navbar navbar-expand-md navbar-light bg-light ${window.location.pathname.toLowerCase()==='/history' || window.location.pathname.toLowerCase()==='/objectives' ? 'Header_history'  : 'Header_base'}`}>  
                <a className="navbar-brand Header_text" href="/"><img src={nima_icon} alt="x" width="58" height="58" className="Nima_icon"/><span className="Header_title">Nima India</span></a>
                <ul className="navbar-nav Header_links">
                    <li className="nav-item Header_items">
                    <a className="nav-link Header_text_home" href="/">Home</a>
                    </li>    
                    <li className="nav-item Header_items">
                    <a className="nav-link Header_text_desk" href="/desk">Desk</a>
                    </li>
                    <li className="nav-item Header_items dropdown" onClick={()=>{
                        setNewsDropdown(!newsDropdown)
                        console.log("click")
                    }}>
                    <a className="nav-link Header_text_news" href="#" id="navbardrop" data-toggle="dropdown" aria-expanded="false"  href="#" id="navbardrop" data-toggle="dropdown">News
                    {newsDropdown? <FontAwesomeIcon className="Header_icon" icon={faCaretUp} />: <FontAwesomeIcon className="Header_icon" icon={faCaretDown} />}
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="/centralnews">Central News</a>
                        <a className="dropdown-item" href="/branchnews">Branch News</a>
                        <a className="dropdown-item" href="/elections">CC Election 2019-21</a>
                        <a className="dropdown-item" href="/covid">Covid 19</a>
                    </div>
                    </li>
                    <li className="nav-item Header_items">
                    <a className="nav-link Header_text_gallery" href="/gallery">Gallery</a>
                    </li> 
                    <li className="nav-item Header_items dropdown" onClick={()=>{
                        setDownloadDropdown(!downloadDropdown)
                        console.log("click")
                    }}>
                    <a className="nav-link Header_text_downloads" href="#" id="navbardrop" data-toggle="dropdown" aria-expanded="false"  href="#" id="navbardrop" data-toggle="dropdown">Downloads
                    {downloadDropdown? <FontAwesomeIcon className="Header_icon" icon={faCaretUp} />: <FontAwesomeIcon className="Header_icon" icon={faCaretDown} />}
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="/download">Important Downloads</a>
                        <a className="dropdown-item" href="#">Wallpapers</a>
                    </div>
                    </li>
                    <li className="nav-item Header_items dropdown" onClick={()=>{
                        setNimaDropdown(!nimaDropdown)
                        console.log("click")
                    }}>
                    <a className="nav-link Header_text_nima" href="#" id="navbardrop" data-toggle="dropdown" aria-expanded="false"  href="#" id="navbardrop" data-toggle="dropdown">We Nima
                    {nimaDropdown? <FontAwesomeIcon className="Header_icon" icon={faCaretUp} />: <FontAwesomeIcon className="Header_icon" icon={faCaretDown} />}
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="/history">History</a>
                        <a className="dropdown-item" href="/objectives">Objectives</a>
                        <a className="dropdown-item" href="/aboutus">About Us</a>
                        <a className="dropdown-item" href="/stateofficebariars">State Office Bariars</a>
                    </div>
                    </li>
                    <li className="nav-item Header_items dropdown" onClick={()=>{
                        setMembershipDropdown(!membershipDropdown)
                        console.log("click")
                    }}>
                    <a className="nav-link Header_text_membership" href="#" id="navbardrop" data-toggle="dropdown" aria-expanded="false"  href="#" id="navbardrop" data-toggle="dropdown">Membership
                    {membershipDropdown? <FontAwesomeIcon className="Header_icon" icon={faCaretUp} />: <FontAwesomeIcon className="Header_icon" icon={faCaretDown} />}
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="/life">Life Members</a>
                        <a className="dropdown-item" href="/mbs">Mutual Benefits</a>
                        <a className="dropdown-item" href="/womensforum">Women Forum</a>
                        <a className="dropdown-item" href="/studentsforum">Students Forum</a>
                    </div>
                    </li>
                    <li class="nav-item Header_items">
                    <a class="nav-link Header_text_contact" href="/contactus">Contact Us</a>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Header