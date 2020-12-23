import React from 'react';
import './Projects.css'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';

const Projects = (props) => {
    const { _id, projectImage, projectName, technologies, projectType, sourceCode, livePreview } = props.product;
    return (

        <div className="col-md-6">
            <div className="project-box">
                <img className="project-img img-fluid" src={projectImage} alt="" />
                <a href={livePreview} target="blank"><RemoveRedEyeIcon className="live-icon" /></a>
                <h3>{projectName} <br /><p>({projectType}~ web site)</p></h3>
                <span>{technologies}</span>
                <div className="project-footer">
                    <a className="preview" href={livePreview} target="blank">Live Preview</a>
                    <a className="preview" href={sourceCode} target="blank">Source Code</a>
                </div>
            </div>
        </div>

    );
};

export default Projects;