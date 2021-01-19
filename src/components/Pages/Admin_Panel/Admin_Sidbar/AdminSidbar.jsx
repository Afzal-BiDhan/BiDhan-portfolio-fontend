import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AdminSidbar.css';

const AdminSidbar = () => {
    return (
        <div className="adminSidbar">
            <h3 className="das_title">Dashboard</h3>
            <nav>
                <ul>
                    <NavLink className="nav-link" exact to="/admin/home"><li><h5>Home</h5></li></NavLink>
                    <NavLink className="nav-link" exact to="/admin/social"><li><h5>Social</h5></li></NavLink>
                    <NavLink className="nav-link" exact to="/admin/project"><li><h5>Project</h5></li></NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default AdminSidbar;