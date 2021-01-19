import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../../../Layout/Navbar/Navbar';
import { AllNavbar } from '../../../Layout/Navbar/NavStyled';
import './ProjectDetails.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Loading1 from '../../../../loading/Loading1/Loading1';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
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

    const pageTransiition = {
        in: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            y: "100%",
            scale: 0.8,
        }

    };

    const pageTransition = {
        duration: 0.5,
        type: "spring",
        stiffness: 50
    };

    return (
        <>
            <AllNavbar><NavBar /></AllNavbar>
            {loading ? <motion.div
                className="container socialData projectData mt-n mb-5"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransiition}
                transition={pageTransition}
            >
                <div className="action">
                    <div className="">
                        <h3 className="project_id_title">Project Name: <span>{name}</span></h3>
                    </div>
                    <div className="project_action">
                        <Link to="/portfolio" className="btn btn-primary socialData_info mr-2 mb-2">back to </Link>
                        <a href={livePreview} target="blank" className="btn btn-success socialData_info mr-2 mb-2">Live Preview</a>
                        <a href={sourceCode} target="blank" className="btn btn-warning socialData_info mr-2">Source Code</a>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <Carousel>
                            <div><img className="img-fluid" src={image} alt="" /></div>
                            <div><img className="img-fluid" src={imageOne} alt="" /></div>
                            <div><img className="img-fluid" src={imageTwo} alt="" /></div>
                            <div><img className="img-fluid" src={imageThree} alt="" /></div>
                        </Carousel>
                    </div>
                    <div className="col-md-12 project_view my-5">
                        <h3 className="text-center">Project Details</h3>
                        <div className="underline md-5"></div>
                        <ul className="list-group w-100 shadow">
                            <li className="list-group-item">Project I'd: <span>{id}</span></li>
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
            </motion.div> : <Loading1 />}
        </>
    );
};

export default ProjectDetails;