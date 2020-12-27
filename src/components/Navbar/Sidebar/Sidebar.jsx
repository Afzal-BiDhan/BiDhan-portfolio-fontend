import React from 'react';
import styled from 'styled-components';
import './Sidebar.css';
import ClearIcon from '@material-ui/icons/Clear';
import { Link } from 'react-router-dom';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import RateReviewIcon from '@material-ui/icons/RateReview';
import { navBgColor, navBgColorTrs } from '../Navbar';

const Containe = styled.aside`
right: ${({ isOpen }) => (isOpen ? "0" : "-10000px")}`;

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <div className="all">
            <Containe className="idebarContainer" isOpen={isOpen} onClick={toggle}>
                <div className="icon2" onClick={toggle}><ClearIcon /></div>
                <div className="sidebarMenu">
                    <Link to='/' onClick={() => navBgColorTrs()}><HomeIcon />Home</Link>
                    <Link to='/about' onClick={() => navBgColor()}><PersonIcon />About</Link>
                    <Link to='/portfolio' onClick={() => navBgColor()}><BusinessCenterIcon />Portfolio</Link>
                    <Link to='/contact' onClick={() => navBgColor()}><RateReviewIcon />Contact</Link>
                    <Link to='/admin' onClick={() => navBgColorTrs()}><VpnLockIcon />Admin</Link>
                </div>
            </Containe>
        </div>
    );
};

export default Sidebar;