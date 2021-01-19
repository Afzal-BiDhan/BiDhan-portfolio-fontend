import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import loading1 from '../../../../../images/lodaing_1.gif';

const SocialData = () => {
    const { id } = useParams();
    const [loading, setLodaing] = useState(false);
    const [socialLink, setSocialLink] = useState({
        socialName: "",
        socialURL: ""
    });
    const { socialName, socialURL } = socialLink;
    const loadSocialLink = async () => {
        const url = `${process.env.REACT_APP_findSocialLink}/${id}`;
        const result = await axios.get(url);
        setSocialLink(result.data);
        setLodaing(true);
    };

    useEffect(() => {
        loadSocialLink();
    }, [socialLink]);

    return (
        <>
            {loading ?
                <div className="container socialData">
                    <Link to="/" className="btn btn-primary socialData_info">back to home</Link>
                    <h1 className="display-6 mt-5">User Id: {id}</h1>
                    <hr />
                    <ul className="list-group w-50">
                        <li className="list-group-item">Name: {socialName}</li>
                        <li className="list-group-item">Username: {socialURL}</li>
                    </ul>
                </div> : <img className="loading_1" src={loading1} alt="" />}
        </>
    );
};

export default SocialData;