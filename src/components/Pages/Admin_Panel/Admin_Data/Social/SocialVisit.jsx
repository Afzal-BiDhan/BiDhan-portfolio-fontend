import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loading1 from '../../../../../images/lodaing_1.gif';

const SocialVisit = () => {

    const [socialLink, setSocialLink] = useState([]);
    const [loading, setLodaing] = useState(false);
    const [deleteSuccess, setdeleteSuccess] = useState({
        success: "",
    });

    const loadSocialLink = async () => {
        const url = process.env.REACT_APP_getSocialLinks;
        const result = await axios.get(url);
        setSocialLink(result.data.reverse());
        setLodaing(true);
    };

    useEffect(() => {
        loadSocialLink();
    }, [socialLink]);

    const deleteSocialLink = async (id) => {
        const url = `${process.env.REACT_APP_deleteSocialLink}/${id}`;
        await axios
            .delete(url)
            .then(result => {
                if (result.status === 200) {
                    const successDelete = { ...deleteSuccess };
                    successDelete.success = "Social Link Delete Successfull";
                    setdeleteSuccess(successDelete);
                };
            })
            .catch(error => {
                console.log(error);
            });
        loadSocialLink();
    };

    return (
        <div className="container socialVisit">
            {loading ?
                <div className="py-4">
                    <h1 className="text-center">Social Links</h1>
                    <h5 className="text-center text-success mt-3 mb-0">{deleteSuccess.success}</h5>
                    <p className="btn btn-primary mr-2">Links: {socialLink.length}</p>
                    <p className="btn btn-success add_links"><Link to="/admin/socialadd">Add Links</Link></p>
                    <table className="table border shadow">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">I'd</th>
                                <th scope="col">Name</th>
                                <th scope="col">Url</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {socialLink.map((link, index) => (
                                <tr className="social_tr">
                                    <th scope="row">{index + 1}</th>
                                    <td>{link._id}</td>
                                    <td>{link.socialName}</td>
                                    <td>{link.socialURL}</td>
                                    <td>
                                        <Link
                                            to={`/admin/social/${link._id}`}
                                            className="btn btn-primary mr-2">View</Link>
                                        <Link
                                            to={`/admin/edit/social/${link._id}`}
                                            className="btn btn-warning mr-2">Edit</Link>
                                        <Link
                                            onClick={() => deleteSocialLink(link._id)}
                                            className="btn btn-danger">Delete</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> : <img className="loading_1 img-fluid" src={loading1} alt="" />}
        </div>
    );
};

export default SocialVisit;

