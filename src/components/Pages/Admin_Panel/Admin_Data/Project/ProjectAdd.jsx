import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const ProjectAdd = () => {

    let history = useHistory();

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

    const onSubmit = async (e) => {
        e.preventDefault();
        const url = process.env.REACT_APP_postProject;
        await axios
            .post(url, project)
            .then(res => {
                if (res.status) {
                    history.push("/admin/project");
                }
                else {
                    alert("Your project add failed");
                };
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
        <div className="container socialAdd">
            <div className="w-75 mx-auto shadow p-5 mt-5">
                <Link to="/admin/project" className="btn btn-primary socialData_info float-right">back to </Link>
                <h2 className="text-center mb-2">Add Project</h2>
                <h4 className="text-danger text-center mb-4">{project.error}</h4>
                <form onSubmit={(e) => onSubmit(e)} action="">
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text">I'd</span>
                        <input name="_id" value={_id} onChange={(e) => onInputChange(e)} type="text" className="form-control form-control-lg" placeholder="Enter I'd" required />
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text">Name</span>
                        <input name="name" value={name} onChange={(e) => onInputChange(e)} type="text" className="form-control form-control-lg" placeholder="Enter Name" />
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text">image</span>
                        <input name='image' value={image} onChange={(e) => onInputChange(e)} type="text" className="form-control form-control-lg" placeholder="Enter image URL" />
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text">imageOne</span>
                        <input name='imageOne' value={imageOne} onChange={(e) => onInputChange(e)} type="text" className="form-control form-control-lg" placeholder="Enter image URL ~ 1" />
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text">imageTwo</span>
                        <input name='imageTwo' value={imageTwo} onChange={(e) => onInputChange(e)} type="text" className="form-control form-control-lg" placeholder="Enter image URL ~ 2" />
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text">imageThree</span>
                        <input name='imageThree' value={imageThree} onChange={(e) => onInputChange(e)} type="text" className="form-control form-control-lg" placeholder="Enter image URL ~ 3" />
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text">Category</span>
                        <input name="category" value={category} onChange={(e) => onInputChange(e)} type="text" className="form-control form-control-lg" placeholder="Category" />
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text">Description</span>
                        <textarea name="description" value={description} onChange={(e) => onInputChange(e)} className="form-control form-control-lg" placeholder="write project details and description" />
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text">Type</span>
                        <input name="type" value={type} onChange={(e) => onInputChange(e)} type="text" className="form-control form-control-lg" placeholder="Project Website Type" />
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text">Duration</span>
                        <input name="duration" value={duration} onChange={(e) => onInputChange(e)} type="text" className="form-control form-control-lg" placeholder="Project Building Time" />
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text">Technologies</span>
                        <input name="technologies" value={technologies} onChange={(e) => onInputChange(e)} type="text" className="form-control form-control-lg" placeholder="Project Building Technologies" />
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text">Live Preview</span>
                        <input name="livePreview" value={livePreview} onChange={(e) => onInputChange(e)} type="text" className="form-control form-control-lg" placeholder="Website Live Preview" />
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text">Source Code</span>
                        <input name="sourceCode" value={sourceCode} onChange={(e) => onInputChange(e)} type="text" className="form-control form-control-lg" placeholder="Website Source Code" />
                    </div>
                    <button className="btn btn-primary btn-block">Add Project</button>
                </form>
            </div>
        </div>
    );
};

export default ProjectAdd;