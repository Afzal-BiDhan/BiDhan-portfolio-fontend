import React from 'react';
import './Navbar.css';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import RateReviewIcon from '@material-ui/icons/RateReview';
import { Link } from 'react-router-dom';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import SidbarIcon from './Sidebar/SidbarIcon';
export const navBgColorTrs = () => {
    const x = document.querySelector(".nav");
    x.style.setProperty("background", '#302e4d00',);
}
export const navBgColor = () => {
    const x = document.querySelector(".nav");
    x.style.setProperty("background", '#e0fcff',);
}
const NavBar = () => {

    return (
        <div className="container">
            <nav className="nav">
                <div className="logo"><Link to="/" onClick={() => navBgColorTrs()}><h1>AfzalBiDhan</h1></Link></div>
                <ul className="links">
                    <li><Link to="/" onClick={() => navBgColorTrs()}><HomeIcon />Home</Link></li>
                    <li><Link to="/about" onClick={() => navBgColor()}><PersonIcon />About</Link></li>
                    <li><Link to="/portfolio" onClick={() => navBgColor()}><BusinessCenterIcon />Portfolio</Link>
                    </li><li><Link to="/contact" onClick={() => navBgColor()}><RateReviewIcon />Contact</Link></li>
                    <li><Link to="/admin" onClick={() => navBgColorTrs()}><VpnLockIcon />Admin</Link></li>
                </ul>
                <div className="icon-burger">
                    <SidbarIcon />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
