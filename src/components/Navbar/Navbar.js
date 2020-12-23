import React from 'react';
import './Navbar.css';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import RateReviewIcon from '@material-ui/icons/RateReview';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navBgColorTrs = () => {
        const x = document.querySelector(".nav");
        x.style.setProperty("background", '#302e4d00',);
    }
    const navBgColor = () => {
        const x = document.querySelector(".nav");
        x.style.setProperty("background", '#e0fcff',);
    }

    return (
        <div className="container">
            <nav className="nav">
                <input id="nav-toggle" type="checkbox" />
                <div className="logo">
                    <Link
                        to="/"
                        onClick={() => navBgColorTrs()}>
                        Afzal BiDhan
                    </Link>
                </div>
                <ul className="links">
                    <li>
                        <Link
                            to="/"
                            onClick={() => navBgColorTrs()}>
                            <HomeIcon className="icon" />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            onClick={() => navBgColor()}>
                            <PersonIcon className="icon" />
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/portfolio"
                            onClick={() => navBgColor()}>
                            <BusinessCenterIcon className="icon" />
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            onClick={() => navBgColor()}>
                            <RateReviewIcon className="icon" />
                            Contact
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            to="/admin"
                            onClick={() => navBgColor()}>
                            <PersonIcon className="icon" />
                            Admin
                        </Link>
                    </li> */}
                </ul>
                <label for="nav-toggle" className="icon-burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </label>
            </nav>
        </div>
    );
};

export default NavBar;
