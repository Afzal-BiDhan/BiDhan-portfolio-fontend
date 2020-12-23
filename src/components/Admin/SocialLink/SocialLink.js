import React, { useEffect, useState } from 'react';
import SocialLinkData from '../SocialLinkData/SocialLinkData';
import './SocialLink.css';

const SocialLink = () => {

    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch(`https://gentle-fjord-53714.herokuapp.com/socialLink`)
            .then(response => response.json())
            .then(data => setInfo(data));
    }, []);

    return (
        <div className="socialLink">

            <div className="container">
                <form action="https://gentle-fjord-53714.herokuapp.com/addSocialLink" method="POST" className="social-form">
                    <h2 className="social-form-h2 border-top-0"><span>{info.length}</span> Social accounts</h2>
                    <div className="form-row">
                        <div className="input-group mb-3 col-md-7">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Social Name:~</span>
                            </div>
                            <input
                                name="socialName"
                                type="text"
                                className="form-control"
                                placeholder="name"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                required
                            />
                        </div>
                        <div className="input-group mb-3 col-md-5">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Social I'd:~</span>
                            </div>
                            <input
                                name="_id"
                                type="text"
                                className="form-control"
                                placeholder="i'd"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                required
                            />
                        </div>
                        <div className="input-group mb-3 col-md-11">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">Your vanity URL:~</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                id="basic-url"
                                name="socialURL"
                                aria-describedby="basic-addon3"
                                required
                            />
                        </div>
                        <div classNameName="col-md-1">
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>
                <div id="update"></div>
                <div className="social-data">
                    {
                        info.map(socialData => <SocialLinkData Array={socialData}></SocialLinkData>)
                    }
                </div>
            </div>


        </div>
    );
};

export default SocialLink;





