import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import loading1 from '../../../../../images/lodaing_1.gif';
import './Project.css';

const ProjectData = () => {

    const { id } = useParams();
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
    const { image, imageOne, imageTwo, imageThree, name, type, description, category, duration, technologies, livePreview, sourceCode } = project;

    const loadProject = async () => {
        const url = `${process.env.REACT_APP_findProject}/${id}`;
        const result = await axios.get(url);
        setProject(result.data);
        setLodaing(true);
    };

    useEffect(() => {
        loadProject();
    }, [project]);

    return (
        <>
            {loading ?
                <div className="container socialData projectData mb-5">
                    <Link to="/admin/project" className="btn btn-primary socialData_info">back to </Link>
                    <h2 className="display-6 mt-5">Project Id: {id}</h2>
                    <hr />
                    <div className="row">
                        <div className="col-md-5">
                            <h4 className="text-center">Project Image</h4>
                            <img className="img-fluid shadow mt-3" src={image} alt="" />
                            <img className="img-fluid shadow mt-3" src={imageOne} alt="" />
                            <img className="img-fluid shadow mt-3" src={imageTwo} alt="" />
                            <img className="img-fluid shadow mt-3" src={imageThree} alt="" />
                        </div>
                        <div className="col-md-7 project_view mb-5">
                            <h4 className="text-center mb-4">Project Data</h4>
                            <ul className="list-group shadow">
                                <li className="list-group-item">Name: <span>{name}</span></li>
                                <li className="list-group-item">Image Url: <span>{image}</span></li>
                                <li className="list-group-item">imageOne Url: <span>{imageOne}</span></li>
                                <li className="list-group-item">imageTwo Url: <span>{imageTwo}</span></li>
                                <li className="list-group-item">imageThree Url: <span>{imageThree}</span></li>
                                <li className="list-group-item">Category: <span>{category}</span></li>
                                <li className="list-group-item">Description: <span>{description}</span></li>
                                <li className="list-group-item">Type: <span>{type}</span></li>
                                <li className="list-group-item">Duration: <span>{duration}</span></li>
                                <li className="list-group-item">Technologies: <span>{technologies}</span></li>
                                <li className="list-group-item">Live Preview: <span>{livePreview}</span></li>
                                <li className="list-group-item">Source Code: <span>{sourceCode}</span></li>
                            </ul>
                        </div>
                    </div>
                </div> : <img className="loading_1" src={loading1} alt="" />}
        </>
    );
};

export default ProjectData;