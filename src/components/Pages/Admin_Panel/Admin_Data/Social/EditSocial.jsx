import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import loading1 from '../../../../../images/lodaing_1.gif';

const EditSocial = () => {

    const { id } = useParams();

    let history = useHistory();
    const [loading, setLodaing] = useState(false);
    const [socialLink, setSocialLink] = useState({
        _id: "",
        socialName: "",
        socialURL: ""
    });
    const { _id, socialName, socialURL } = socialLink;

    const onInputChange = (e) => {
        setSocialLink({ ...socialLink, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const loadUser = async () => {
            const url = `${process.env.REACT_APP_findSocialLink}/${id}`;
            const result = await axios.get(url);
            setSocialLink(result.data);
            setLodaing(true);
        };
        loadUser()
    }, []);

    const updateSocialLink = (id, e) => {
        const url = `${process.env.REACT_APP_patchSocialLink}/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(socialLink)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.modifiedCount > 0) {
                    history.push("/admin/admin=socialvisit");
                    alert("Update successful");
                } else {
                    alert("Your link add failed");
                }
            })
            .catch(error => {
                const newUserInfo = { ...socialLink };
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setSocialLink(newUserInfo);
                console.log(newUserInfo);
            });
    };

    return (
        <div className="container socialAdd">
            {loading ?
                <div className="w-75 mx-auto shadow p-5 mt-5">
                    <h2 className="text-center mb-2">Edit Social Link</h2>
                    <h4 className="text-danger text-center mb-4">{socialLink.error}</h4>
                    <>
                        <div className="input-group flex-nowrap mb-3">
                            <span className="input-group-text" id="id">I'd</span>
                            <input name="_id" value={_id} onChange={(e) => onInputChange(e)} type="text" className="form-control form-control-lg" placeholder="Enter I'd" aria-describedby="id" />
                        </div>
                        <div className="input-group flex-nowrap mb-3">
                            <span className="input-group-text" id="name">Name</span>
                            <input name="socialName" value={socialName} onChange={(e) => onInputChange(e)}
                                type="text" className="form-control form-control-lg" placeholder="Enter Name" aria-describedby="name" />
                        </div>
                        <div className="input-group flex-nowrap mb-3">
                            <span className="input-group-text" id="url">Vanity URL</span>
                            <input name="socialURL" value={socialURL} onChange={(e) => onInputChange(e)} type="text" className="form-control form-control-lg" placeholder="Enter Vanity URL" aria-describedby="url" />
                        </div>
                        <button onClick={() => updateSocialLink(id)} className="btn btn-warning btn-block">Update Link</button>
                    </>
                </div> : <img className="loading_1" src={loading1} alt="" />}
        </div>
    );
};

export default EditSocial;