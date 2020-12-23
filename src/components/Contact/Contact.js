import React, { useEffect, useState } from 'react';
import './Contact.css';
import shape from '../../images/shape.png';
import location from '../../images/location.png';
import email from '../../images/email.png';
import phone from '../../images/phone.png';
import Footer from '../Footer/Footer';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import emailjs from 'emailjs-com';

const Contact = () => {

    const [twitter, setTwitter] = useState([]);
    const [facebook, setFacebook] = useState([]);
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
        fetch('https://gentle-fjord-53714.herokuapp.com/singleSocialLink/4444')
            .then(response => response.json())
            .then(data => setLinkedin(data));
    }, []);
    useEffect(() => {
        fetch('https://gentle-fjord-53714.herokuapp.com/singleSocialLink/5555')
            .then(response => response.json())
            .then(data => setGithub(data));
    }, []);



    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_qof1njh', 'template_jdrcb3l', e.target, 'user_mtQcgA3CaILkDkwHRtUYP')
            .then((result) => {
                alert("Your message send successful")
            }, (error) => {
                alert("Your message send error")
            });
        e.target.reset()
    }
    return (
        <>
            <div class="contact-container">
                <span class="big-circle"></span>
                <img src={shape} class="square" alt="" />
                <div class="form">
                    <div class="contact-info">
                        <h3 class="contact-title">Let's get in touch</h3>
                        <p class="text">
                            I am a web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web  advanced technologys.
                        </p>

                        <div class="info">
                            <div class="information">
                                <img src={location} class="icon" alt="" />
                                <p>Shibchar, Madaripur, Bangladesh</p>
                            </div>
                            <div class="information">
                                <img src={email} class="icon" alt="" />
                                <p>afzalbidhan@gmail.com</p>
                            </div>
                            <div class="information">
                                <img src={phone} class="icon" alt="" />
                                <p>+880 1793926521</p>
                            </div>
                        </div>

                        <div class="social-media">
                            <p>Connect with us :</p>
                            <div class="social-icons">
                                <a href={facebook.socialURL} target="black">
                                    <FacebookIcon />
                                </a>
                                <a href={linkedin.socialURL} target="black">
                                    <LinkedInIcon />
                                </a>
                                <a href={github.socialURL} target="black">
                                    <GitHubIcon />
                                </a>
                                <a href={twitter.socialURL} target="black">
                                    <TwitterIcon />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="contact-form">
                        <span class="circle one"></span>
                        <span class="circle two"></span>

                        <form className="form-contact" onSubmit={(e) => sendEmail(e)}>
                            <h3 class="title">Contact us</h3>
                            <div class="input-container">
                                <input type="text" name="name" class="input" placeholder="Full name" required />
                            </div>
                            <div class="input-container">
                                <input type="email" name="email" class="input" placeholder="Email" required />
                            </div>
                            <div class="input-container">
                                <input type="tel" name="phone" class="input" placeholder="Phone" />
                            </div>
                            <div class="input-container textarea">
                                <textarea name="message" class="input" placeholder="Message" required></textarea>
                            </div>
                            <button type="submit" class="contact-form-btn">Send</button>
                        </form>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Contact;