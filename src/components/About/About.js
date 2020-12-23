import React from 'react';
import './About.css';
import EventIcon from '@material-ui/icons/Event';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import resume from '../../afzals-Resume.pdf';

const About = () => {

    const Progress = (props) => {
        return (
            <div className="skill-item">
                <h5>{props.name} <span>{props.value}</span></h5>
                <div className="progress">
                    <div className="progress-in" style={{ width: props.value }}></div>
                </div>
            </div>
        );
    }
    const Info = (props) => {
        return <p>{props.name} : <span>{props.data}</span></p>
    }
    const TimelineTtem = (props) => {
        return (
            <div className="timeline-item">
                <div className="circle-dot"></div>
                <h6 className="timeline-data">
                    {props.icon} <span className="dt">{props.date}</span>
                </h6>
                <h4 className="timeline-title">{props.title}</h4>
                <p className="timeline-text">{props.description}</p>
            </div>
        );
    }

    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-title text-center margin">
                            <h2 className="text-center">about <span>of Afzal</span></h2>
                            <span className="title-head-subtitle">I design and code beautiful things, and I love what I do.</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="about-text">
                            <h3>I'm Afzal Bidhan and a <span>Web Developer</span></h3>
                            <p>Hi! My name is Afzal Bidhan. I am a Web Developer, and I'm very passionate and dedicated to my work. With 2 years experince as a professional Web Developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration</p>
                        </div>
                    </div>
                </div>
                <div className="personal-info">
                    <div className="row">
                        <div className="col-md-3">
                            <Info name="Full Name" data="Afzal Bidhan" />
                            <Info name="Birthdate" data="1 Oct 1999" />
                            <Info name="Nationality" data="Bangladeshi" />
                            <Info name="Experience" data="2 years" />
                            <Info name="Address" data="Dhaka, Bangladesh" />
                            <div className="buttons">
                                <a href={resume} download="afzals-Resume.pdf" className="home-btn btn btn">Download CV</a>
                                <Link to="/contact" className="btn home-btn btn about-btn">Hire Me</Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <Info name="Freelance" data="Available" />
                            <Info name="Langages" data="Bangla, English" />
                            <Info name="Phone" data="+880 1793926521" />
                            <Info name="Email" data="afzalbidhan@gmail.com" />
                            <Info name="Skype" data="skypedaria.afzalbidhan" />
                        </div>
                        <div className="col-md-5">
                            <div className="skills">
                                <Progress name="Html" value="80%" />
                                <Progress name="Css" value="76%" />
                                <Progress name="Javascript" value="70%" />
                                <Progress name="Wordpress" value="77%" />
                                <Progress name="React.js" value="75%" />
                                <Progress name="Node.js" value="69%" />
                                <Progress name="Express.js" value="66%" />
                                <Progress name="MongoDB" value="70%" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row about-info">
                    <div className="col-md-6">
                        <div className="education">
                            <h3 className="titlee">Education</h3>
                            <div className="timeline-box">
                                <div className="timeline shaow-dark">
                                    <TimelineTtem
                                        icon={<EventIcon />}
                                        date="2005 - 2016"
                                        title="Dhaka Collegiate School"
                                        description="I have completed SSC from Dhaka Collegiate School. And I studied science group at SSC. My SSC result is 4.87 GPA."
                                    />
                                    <TimelineTtem
                                        icon={<EventIcon />}
                                        date="2017 - 2019"
                                        title="Web design & development"
                                        description="I have completed web development from Web design & development Institute. I have been involved with web development since 2017. And my performance at that institute is very good."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="experience">
                            <h3 className="titlee">Experience</h3>
                            <div className="timeline-box">
                                <div className="timeline shaow-dark">
                                    <TimelineTtem
                                        icon={<EventIcon />}
                                        date="2018 - 2020"
                                        title="Freelance"
                                        description="I have been working at Freelancer.com, Fiverr.com and Upwork.com since 2018-2020. And I have been working successfully on these platforms."
                                    />
                                    <TimelineTtem
                                        icon={<EventIcon />}
                                        date="2017 - 2020"
                                        title="Project complicated"
                                        description="Over the past few years I have completed numerous projects. And I have used the latest technology in these websites with the skills that I have created website"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div >
    );
};

export default About;