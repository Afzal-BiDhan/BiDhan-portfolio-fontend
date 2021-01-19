import React from 'react';
import './Navbar.css';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import RateReviewIcon from '@material-ui/icons/RateReview';
import { Link, NavLink } from 'react-router-dom';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import SidbarIcon from './Sidebar/SidbarIcon';

const NavBar = () => {

    return (
        <nav className="nav">
            <div className="container">
                <div className="logo"><Link to="/"><h1>AfzalBiDhan</h1></Link></div>
                <ul className="links">
                    <li><NavLink className="nav-link" exact to="/"><HomeIcon />Home</NavLink></li>
                    <li><NavLink className="nav-link" exact to="/about"><PersonIcon />About</NavLink></li>
                    <li><NavLink className="nav-link" exact to="/portfolio"><BusinessCenterIcon />Portfolio</NavLink></li>
                    <li><NavLink className="nav-link" exact to="/contact"><RateReviewIcon />Contact</NavLink></li>
                    <li><NavLink className="nav-link" exact to="/admin/home"><VpnLockIcon />Admin</NavLink></li>
                </ul>

                <div className="icon-burger">
                    <SidbarIcon />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
