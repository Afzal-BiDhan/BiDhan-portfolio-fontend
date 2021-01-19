import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import resume from '../../../afzals-Resume.pdf';
import Info from './Info/Info';
import Progress from './Progress/Progress';
import { InfoData, ProgressData, TimelineTtemData, aboutDescription } from '../../../Data';
import TimelineTtem from './TimelineTtem/TimelineTtem';
import NavBar from '../../Layout/Navbar/Navbar';
import Footer from '../../Layout/Footer/Footer.jsx';
import { AllNavbar } from '../../Layout/Navbar/NavStyled';

const About = () => {

    return (
        <>
            <AllNavbar><NavBar /></AllNavbar>
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title text-center margin">
                                <h2 className="text-center about_ani">about<span>of Afzal</span></h2>
                                <span className="title-head-subtitle">I design and code beautiful things, and I love what I do.</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="about-text">
                                <h3>I'm Afzal Bidhan and a <span>Web Developer</span></h3>
                                <p>{aboutDescription}</p>
                            </div>
                        </div>
                    </div>
                    <div className="personal-Info">
                        <div className="row">
                            <div className="col-md-3">
                                {InfoData.slice(0, 5).map(data => <Info key={data.id} name={data.name} data={data.data} />)}
                                <div className="buttons">
                                    <a href={resume} download="afzals-Resume.pdf" className="home-btn btn btn_ani">Download CV</a><Link to="/contact" className="btn home-btn btn about-btn">Hire Me</Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                {InfoData.slice(5, 10).map(data => <Info key={data.id} name={data.name} data={data.data} />)}
                            </div>
                            <div className="col-md-5">
                                <div className="skills">
                                    {ProgressData.map(data => <Progress key={data.id} name={data.name} value={data.value} class={data.class} />)}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row about-Info">
                        <div className="col-md-6">
                            <div className="education">
                                <h3 className="titlee">Education</h3>
                                <div className="timeline-box">
                                    <div className="timeline shaow-dark">
                                        {TimelineTtemData.slice(0, 2).map(data => <TimelineTtem key={data.id} date={data.date} title={data.title} description={data.description} />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="experience">
                                <h3 className="titlee">Experience</h3>
                                <div className="timeline-box">
                                    <div className="timeline shaow-dark">
                                        {TimelineTtemData.slice(2, 4).map(data => <TimelineTtem key={data.id} date={data.date} title={data.title} description={data.description} />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;