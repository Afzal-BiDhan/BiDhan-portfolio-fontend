import React from 'react';
import ProjectInfo from './ProjectInfo/ProjectInfo';
import SocialLink from './SocialLink/SocialLink';
import Footer from '../Footer/Footer';

const Admin = () => {
    return (
        <div style={{marginTop: "100px"}}>
            <SocialLink/>
            <ProjectInfo/>
            <Footer/>
        </div>
    );
};

export default Admin;