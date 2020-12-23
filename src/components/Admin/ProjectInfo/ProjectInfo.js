import React, { useEffect, useState } from 'react';
import ProjectData from '../ProjectData/ProjectData';

const ProjectInfo = () => {

    const [projectInfo, setProjectInfo] = useState([]);
    useEffect(() => {
        fetch(`https://gentle-fjord-53714.herokuapp.com/projectInfo`)
            .then(response => response.json())
            .then(data => setProjectInfo(data));
    }, []);

    return (
        <div>
            <div className="container">
                <form action="https://gentle-fjord-53714.herokuapp.com/addProjectInfo" method="POST">
                    <h2 className="social-form-h2">Total <span>{projectInfo.length}</span> projects </h2>
                    <div className="row">
                        <div className="input-group mb-3 col-md-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">I'd</span>
                            </div>
                            <input
                                type="text"
                                name="_id"
                                className="form-control"
                                placeholder="i'd"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                required
                            />
                        </div>
                        <div className="input-group mb-3 col-md-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Image</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                name="projectImage"
                                placeholder="image"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                required
                            />
                        </div>
                        <div className="input-group mb-3 col-md-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Name</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="name"
                                aria-label="Username"
                                name="projectName"
                                aria-describedby="basic-addon1"
                                required
                            />
                        </div>
                        <div className="input-group mb-3 col-md-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Type</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="type"
                                aria-label="Username"
                                name="projectType"
                                aria-describedby="basic-addon1"
                                required
                            />
                        </div>
                        <div className="input-group mb-3 col-md-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Category</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="category"
                                aria-label="Username"
                                name="projectCategory"
                                aria-describedby="basic-addon1"
                                required
                            />
                        </div>
                        <div className="input-group mb-3 col-md-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Duration</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="duration"
                                aria-label="Username"
                                name="projectDuration"
                                aria-describedby="basic-addon1"
                                required
                            />
                        </div>
                        <div className="input-group mb-3 col-md-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Technologies</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="technologies"
                                aria-label="Username"
                                name="technologies"
                                aria-describedby="basic-addon1"
                                required
                            />
                        </div>
                        <div className="input-group mb-3 col-md-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Live Preview</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="live preview"
                                aria-label="Username"
                                name="livePreview"
                                aria-describedby="basic-addon1"
                                required
                            />
                        </div>
                        <div className="input-group mb-3 col-md-10">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Source Code</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="source code"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                name="sourceCode"
                                required
                            />
                        </div>
                        <div className="input-group mb-3 col-md-2">
                            <button type="submit" className="btn btn-primary">Add Project</button>
                        </div>
                    </div>
                </form>
                <div id="projectUpdate"></div>
                <div id="project-info"></div>
                <div className="social-data">
                    {
                        projectInfo.map(socialData => <ProjectData Array={socialData}></ProjectData>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ProjectInfo;