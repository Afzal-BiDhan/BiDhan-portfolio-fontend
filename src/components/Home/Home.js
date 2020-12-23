import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import BiDhanImg from '../../images/PicsArt_11-15-01.20.45.png';

const Home = () => {

    const [twitter, setTwitter] = useState([]);
    const [facebook, setFacebook] = useState([]);
    const [instagram, setInstagram] = useState([]);
    const [linkedin, setLinkedin] = useState([]);
    const [github, setGithub] = useState([]);

    useEffect(() => {
        fetch('https://gentle-fjord-53714.herokuapp.com/singleSocialLink/1111')
            .then(response => response.json())
            .then(data => setTwitter(data));
    }, []);
    useEffect(() => {
        fetch('https://gentle-fjord-53714.herokuapp.com/singleSocialLink/2222')
            .then(response => response.json())
            .then(data => setFacebook(data));
    }, []);
    useEffect(() => {
        fetch('https://gentle-fjord-53714.herokuapp.com/singleSocialLink/3333')
            .then(response => response.json())
            .then(data => setInstagram(data));
    }, []);
    useEffect(() => {
        fetch('https://gentle-fjord-53714.herokuapp.com/singleSocialLink/4444')
            .then(response => response.json())
            .then(data => setLinkedin(data));
    }, []);
    useEffect(() => {
        fetch('https://gentle-fjord-53714.herokuapp.com/singleSocialLink/5555')
            .then(response => response.json())
            .then(data => setGithub(data));
    }, []);

    const navBgColor = () => {
        const x = document.querySelector(".nav");
        x.style.setProperty("background", '#e0fcff',);
    }

    return (
        <div className='home'>
            <div className="container home-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="title">
                            <div className="underline"></div>
                            <h1>I'm BiDhan</h1>
                            <h4>Responsive Web Design & Development</h4>
                            <Link
                                className="home-btn btn"
                                to="/contact"
                                onClick={() => navBgColor()}>
                                CONTACT ME
                            </Link>
                            <div className="social-links">
                                <a href={facebook.socialURL} target="black"><FacebookIcon id="social-icon" /></a>
                                <a href={linkedin.socialURL} target="black"><LinkedInIcon id="social-icon" /></a>
                                <a href={github.socialURL} target="black"><GitHubIcon id="social-icon" /></a>
                                <a href={twitter.socialURL} target="black"><TwitterIcon id="social-icon" /></a>
                                <a href={instagram.socialURL} target="black"><InstagramIcon id="social-icon" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid biDhan-img" src={BiDhanImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;