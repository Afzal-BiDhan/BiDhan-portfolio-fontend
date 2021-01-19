import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SocialAdd = () => {

    let history = useHistory();
    const [socialLink, setSocialLink] = useState({
        _id: "",
        socialName: "",
        socialURL: ""
    });
    const { _id, socialName, socialURL } = socialLink;

    const onInputChange = (e) => {
        // console.log(e.target.value);
        setSocialLink({ ...socialLink, [e.target.name]: e.target.value });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        const url = process.env.REACT_APP_postSocialLink;
        await axios
            .post(url, socialLink)
            .then(res => {
                if (res.status) {
                    history.push("/admin/admin=socialvisit");
                } else {
                    alert("Your link add failed");
                }
            })
            .catch(error => {
                const newUserInfo = { ...socialLink };
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setSocialLink(newUserInfo);
            });
    };

    return (
        <div className="container socialAdd">
            <div className="w-75 mx-auto shadow p-5 mt-5">
                <h2 className="text-center mb-2">Add Social Link</h2>
                <h4 className="text-danger text-center mb-4">{socialLink.error}</h4>
                <form onSubmit={(e) => onSubmit(e)} action="">
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text" id="id">I'd</span>
                        <input name="_id" value={_id} onChange={(e) => onInputChange(e)} type="text" className="form-control form-control-lg" placeholder="Enter I'd" aria-describedby="id" required />
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text" id="name">Name</span>
                        <input name="socialName" value={socialName} onChange={(e) => onInputChange(e)} type="text" className="form-control form-control-lg" placeholder="Enter Name" aria-describedby="name" required />
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text" id="url">Vanity URL</span>
                        <input name="socialURL" value={socialURL} onChange={(e) => onInputChange(e)} type="text" className="form-control form-control-lg" placeholder="Enter Vanity URL" aria-describedby="url" required />
                    </div>
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    );
};

export default SocialAdd;