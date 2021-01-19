import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import loading1 from '../../../../../images/lodaing_1.gif';
import './Project.css';

const EditProject = () => {
    const { id } = useParams();
    let history = useHistory();

    const [loading, setLodaing] = useState(false);
    const [project, setProject] = useState({
        _id: "",
        name: "",
        image: "",
        imageOne: "",
        imageTwo: "",
        imageThree: "",
        type: "",
        description: "",
        category: "",
        duration: "",
        technologies: "",
        livePreview: "",
        sourceCode: "",
        error: "",
    });

    const { _id, image, imageOne, imageTwo, imageThree, name, type, description, category, duration, technologies, livePreview, sourceCode } = project;

    const onInputChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const loadUser = async () => {
            const url = `${process.env.REACT_APP_findProject}/${id}`;
            const result = await axios.get(url);
            setProject(result.data);
            setLodaing(true);
        };
        loadUser()
    }, []);

    const updateProject = (id) => {
        const url = `${process.env.REACT_APP_patchProject}/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.modifiedCount > 0) {
                    history.push("/admin/project");
                    alert("Update successful");
                } else {
                    alert("Update Your Project Data");
                }
            })
            .catch(error => {
                const newUserInfo = { ...project };
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setProject(newUserInfo);
                console.log(newUserInfo);
            });
    };
    return (
        <div className="container socialAdd my-5">
            {loading ?
                <div className="row">
                    <div className="col-md-5 mt-5 projectd_img">
                        <img className="img-fluid mt-3" src={image} alt="" />
                        <img className="img-fluid mt-3" src={imageOne} alt="" />
                        <img className="img-fluid mt-3" src={imageTwo} alt="" />
                        <img className="img-fluid mt-3" src={imageThree} alt="" />
                    </div>
                    <div className="col-md-7">
                        <div className="w-75">
                            <h2 className="text-center mb-2">Edit Project <span><Link to="/admin/project" className="btn btn-primary float-right">back to</Link></span></h2>
                            <h4 className="text-danger text-center mb-4">{project.error}</h4>
                            <div className="input-group flex-nowrap mb-3">
                                <span className="input-group-text">I'd</span>
                                <input name="_id" value={_id} onChange={(e) => onInputChange(e)} type="text" className="form-control" placeholder="Enter I'd" required />
                            </div>
                            <div className="input-group flex-nowrap mb-3">
                                <span className="input-group-text">Name</span>
                                <input name="name" value={name} onChange={(e) => onInputChange(e)} type="text" className="form-control" placeholder="Enter Name" />
                            </div>
                            <div className="input-group flex-nowrap mb-3">
                                <span className="input-group-text">image</span>
                                <input name='image' value={image} onChange={(e) => onInputChange(e)} type="text" className="form-control" placeholder="Enter image URL" />
                            </div>
                            <div className="input-group flex-nowrap mb-3">
                                <span className="input-group-text">imageOne</span>
                                <input name='imageOne' value={imageOne} onChange={(e) => onInputChange(e)} type="text" className="form-control" placeholder="Enter image URL ~ 1" />
                            </div>
                            <div className="input-group flex-nowrap mb-3">
                                <span className="input-group-text">imageTwo</span>
                                <input name='imageTwo' value={imageTwo} onChange={(e) => onInputChange(e)} type="text" className="form-control" placeholder="Enter image URL ~ 2" />
                            </div>
                            <div className="input-group flex-nowrap mb-3">
                                <span className="input-group-text">imageThree</span>
                                <input name='imageThree' value={imageThree} onChange={(e) => onInputChange(e)} type="text" className="form-control" placeholder="Enter image URL ~ 3" />
                            </div>
                            <div className="input-group flex-nowrap mb-3">
                                <span className="input-group-text">Category</span>
                                <input name="category" value={category} onChange={(e) => onInputChange(e)} type="text" className="form-control" placeholder="Category" />
                            </div>
                            <div className="input-group flex-nowrap mb-3">
                                <span className="input-group-text">Description</span>
                                <textarea name="description" value={description} onChange={(e) => onInputChange(e)} className="form-control" placeholder="write project details and description" />
                            </div>
                            <div className="input-group flex-nowrap mb-3">
                                <span className="input-group-text">Type</span>
                                <input name="type" value={type} onChange={(e) => onInputChange(e)} type="text" className="form-control" placeholder="Project Website Type" />
                            </div>
                            <div className="input-group flex-nowrap mb-3">
                                <span className="input-group-text">Duration</span>
                                <input name="duration" value={duration} onChange={(e) => onInputChange(e)} type="text" className="form-control" placeholder="Project Building Time" />
                            </div>
                            <div className="input-group flex-nowrap mb-3">
                                <span className="input-group-text">Technologies</span>
                                <input name="technologies" value={technologies} onChange={(e) => onInputChange(e)} type="text" className="form-control" placeholder="Project Building Technologies" />
                            </div>
                            <div className="input-group flex-nowrap mb-3">
                                <span className="input-group-text">Live Preview</span>
                                <input name="livePreview" value={livePreview} onChange={(e) => onInputChange(e)} type="text" className="form-control" placeholder="Website Live Preview" />
                            </div>
                            <div className="input-group flex-nowrap mb-3">
                                <span className="input-group-text">Source Code</span>
                                <input name="sourceCode" value={sourceCode} onChange={(e) => onInputChange(e)} type="text" className="form-control" placeholder="Website Source Code" />
                            </div>
                            <button onClick={() => updateProject(id)} className="btn btn-warning btn-block">Update Project</button>
                        </div>
                    </div>
                </div> : <img className="loading_1" src={loading1} alt="" />}
        </div>
    );
};

export default EditProject;