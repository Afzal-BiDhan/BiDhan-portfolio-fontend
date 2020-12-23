import React, { useContext, useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';



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


    return (
        <div className="login">
            <img src='' alt="" className="wave" />
            <div className="login-container">
                <div className="img">
                    <img src='' alt="" />
                </div>
                <div className="login-content">
                    <form onSubmit={handleSubmit} className="login-form">
                        <img src='' alt="" />
                        <h2 className="title">Login Admin Panel</h2>
                        <div className="input-div one">
                            <div className="i">
                                {/* <PersonIcon className="user-icon" /> */}
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
                                {/* <NoEncryptionIcon className="user-icon" /> */}
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
                </div>
            </div>
        </div>

    );
}

export default Login;
