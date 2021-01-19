import React from 'react';
import './Projects.css'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { Link } from 'react-router-dom';

const Projects = (props) => {
    const { image, livePreview, _id, name } = props.product;
    console.log(_id);
    return (

        <div className="col-md-4">
            <div className="project-box">
                <img className="project-img img-fluid" src={image} alt="" />
                <Link to={`/project/details/${_id}`}><RemoveRedEyeIcon className="live-icon" /></Link>
                <h4 className="mt-2">{name}</h4>
                <div className="project-footer">
                    <a className="preview mr-5" href={livePreview} target="blank">Live Preview</a>
                    <Link to={`/project/details/${_id}`}>Project Details</Link>
                </div>
            </div>
        </div>

    );
};

export default Projects;