import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import BiDhanImg from '../../images/PicsArt_11-15-01.20.45.png';
import { navBgColor } from '../Navbar/Navbar';

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

    return (
        <div className='home'>
            <div className="container home_container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="title">
                            <div className="underline"></div>
                            <div className="waviy">
                                <span>I</span><span>'</span><span>m</span><span className="dit_hide">.</span><span>B</span><span>i</span><span>D</span><span>h</span><span>a</span><span>n</span>
                            </div>
                            <h4>Responsive Web Design & Development</h4>
                            <Link className="home-btn btn ani" to="/contact" onClick={() => navBgColor()}>
                                CONTACT ME
                            </Link>
                            <div className="social-links">
                                <a className="keyani" href={facebook.socialURL} target="black">
                                    <FacebookIcon id="social-icon" />
                                </a>
                                <a className="ani_2" href={linkedin.socialURL} target="black">
                                    <LinkedInIcon id="social-icon" />
                                </a>
                                <a className="ani_3" href={github.socialURL} target="black">
                                    <GitHubIcon id="social-icon" />
                                </a>
                                <a className="ani_4" href={twitter.socialURL} target="black">
                                    <TwitterIcon id="social-icon" />
                                </a>
                                <a className="ani_5" href={instagram.socialURL} target="black">
                                    <InstagramIcon id="social-icon" />
                                </a>
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