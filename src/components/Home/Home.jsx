import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import BiDhanImg from '../../images/PicsArt_11-15-01.20.45.png';
import NavBar from '../Layout/Navbar/Navbar';
import { HomeNavbar } from '../Layout/Navbar/NavStyled';
import { motion } from 'framer-motion';

const Home = () => {

    const [twitter, setTwitter] = useState([]);
    const [facebook, setFacebook] = useState([]);
    const [instagram, setInstagram] = useState([]);
    const [linkedin, setLinkedin] = useState([]);
    const [github, setGithub] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_findSocialLink}/1111`)
            .then(res => res.json())
            .then(data => setTwitter(data));
    }, [twitter]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_findSocialLink}/2222`)
            .then(res => res.json())
            .then(data => setFacebook(data));
    }, [facebook]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_findSocialLink}/3333`)
            .then(res => res.json())
            .then(data => setInstagram(data));
    }, [instagram]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_findSocialLink}/4444`)
            .then(res => res.json())
            .then(data => setLinkedin(data));
    }, [linkedin]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_findSocialLink}/5555`)
            .then(res => res.json())
            .then(data => setGithub(data));
    }, [github]);

    const facebookLink = facebook.socialURL;
    const linkedinLink = linkedin.socialURL;
    const githubLink = github.socialURL;
    const twitterLink = twitter.socialURL;
    const instagramLink = instagram.socialURL;

    return (
        <>
            <HomeNavbar><NavBar /></HomeNavbar>
            <motion.div className='home' 
                exit={{opacity: 0}}
                animate={{opacity: 1}}
                initial={{opacity: 0}}
            >
                <div className="container home_container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="title">
                                <div className="home_underline"></div>
                                <div className="waviy">
                                    <span>I</span><span>'</span><span>m</span><span className="dit_hide">.</span><span>B</span><span>i</span><span>D</span><span>h</span><span>a</span><span>n</span>
                                </div>
                                <h4>Responsive Web Design & Development</h4>
                                <Link className="home-btn btn ani" to="/contact">CONTACT ME</Link>
                                <div className="social-links">
                                    <a href={facebookLink} target="black"><FacebookIcon /></a>
                                    <a href={linkedinLink} target="black"><LinkedInIcon /></a>
                                    <a href={githubLink} target="black"><GitHubIcon /></a>
                                    <a href={twitterLink} target="black"><TwitterIcon /></a>
                                    <a href={instagramLink} target="black"><InstagramIcon /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid biDhan-img" src={BiDhanImg} alt="" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Home;