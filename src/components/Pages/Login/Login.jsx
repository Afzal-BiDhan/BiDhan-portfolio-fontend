import React, { useContext, useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from '../../../firebaseConfig';
import avatar from '../../../images/avatar.svg';
import bg from '../../../images/bg.svg';
import wave from '../../../images/wave.png';
import PersonIcon from '@material-ui/icons/Person';
import { NoEncryptionSharp } from '@material-ui/icons';
import { UserContext } from '../../../App';
import { AllNavbar } from '../../Layout/Navbar/NavStyled';
import NavBar from '../../Layout/Navbar/Navbar';
import { motion } from 'framer-motion';
firebase.initializeApp(firebaseConfig);

function Login() {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleBlur = (e) => {
        let isFieldValid = true;

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {

        if (user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log('sign in user info', res.user)
                })
                .catch(function (error) {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }
        e.preventDefault();
    }

    const pageTransiition = {
        in: {
            opacity: 1,
            x: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            x: "100px",
            scale: 0.8,
        }

    };

    const pageTransition = {
        duration: 0.5,
        type: "spring",
        stiffness: 50
    };

    return (
        <>
            <AllNavbar><NavBar /></AllNavbar>
            <div className="login">
                <img src={wave} alt="" className="wave" />
                <div className="login-container">
                    <div className="img">
                        <img className="login_ani" src={bg} alt="" />
                    </div>
                    <motion.div
                        className="login-content"
                        initial="out"
                        animate="in"
                        exit="out"
                        variants={pageTransiition}
                        transition={pageTransition}
                    >
                        <form onSubmit={handleSubmit} className="login-form">
                            <img src={avatar} alt="" />
                            <h2 className="title">Login Admin Panel</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <PersonIcon className="user-icon" />
                                </div>
                                <div className="div">
                                    <input
                                        placeholder="Enter Your Email"
                                        type="text"
                                        name="email"
                                        onBlur={handleBlur}
                                        className="input"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input-div">
                                <div className="i">
                                    <NoEncryptionSharp className="user-icon" />
                                </div>
                                <div className="div">
                                    <input
                                        placeholder="Enter Your Password"
                                        type="password"
                                        name="password"
                                        onBlur={handleBlur}
                                        className="input"
                                        required
                                    />
                                </div>
                            </div>
                            <p style={{ color: 'red' }}>{user.error}</p>
                            <input
                                type="submit"
                                className="login-btn"
                                value="Login"
                            />
                        </form>
                    </motion.div>
                </div>
            </div>
        </>

    );
}

export default Login;
