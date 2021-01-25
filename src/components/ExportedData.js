import React from 'react';
import NavBar from "./Layout/Navbar/Navbar";
import { AllNavbar } from "./Layout/Navbar/NavStyled";
import AdminSidbar from "./Pages/Admin_Panel/Admin_Sidbar/AdminSidbar";

export const AdminRoute = ({ data }) => {
    return (
        <>
            <AllNavbar><NavBar /></AllNavbar>
            <div className="admin">
                <div className="row">
                    <div className="col-md-2 admin_sidbar"><AdminSidbar /></div>
                    <div className="col-md-10 admin_panel">
                        <div className="container">{data}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const ApiLoading = () => {
    return (
        <div class="api_loading">
            <div id="shrinking-circle"></div>
            <div id="shrinking-circle1"></div>
        </div>
    )
};
