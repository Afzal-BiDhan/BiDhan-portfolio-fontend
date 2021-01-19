import React from 'react';
import styled from 'styled-components';
import './Sidebar.css';
import ClearIcon from '@material-ui/icons/Clear';
import { Link, NavLink } from 'react-router-dom';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import RateReviewIcon from '@material-ui/icons/RateReview';

const Containe = styled.aside`
right: ${({ isOpen }) => (isOpen ? "0" : "-10000px")}`;

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <div className="all">
            <Containe className="idebarContainer" isOpen={isOpen} onClick={toggle}>
                <div className="icon2" onClick={toggle}><ClearIcon /></div>
                <div className="sidebarMenu">
                    <NavLink className="nav-link" exact to="/"><HomeIcon />Home</NavLink>
                    <NavLink className="nav-link" exact to="/about"><PersonIcon />About</NavLink>
                    <NavLink className="nav-link" exact to="/portfolio"><BusinessCenterIcon />Portfolio</NavLink>
                    <NavLink className="nav-link" exact to="/contact"><RateReviewIcon />Contact</NavLink>
                    <NavLink className="nav-link" exact to="/admin/home"><VpnLockIcon />Admin</NavLink>
                </div>
            </Containe>
        </div>
    );
};

export default Sidebar;