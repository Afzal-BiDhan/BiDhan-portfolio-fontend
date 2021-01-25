import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../../../Layout/Navbar/Navbar';
import { AllNavbar } from '../../../Layout/Navbar/NavStyled';
import Comedown from './Comedown/Comedown';
import ProjectInfo from './ProjectInfo/ProjectInfo';

const ProjectDetails = () => {
    const { id } = useParams();
    const [loading, setLodaing] = useState(false);
    const [project, setProject] = useState({ _id: "", name: "", image: "", imageOne: "", imageTwo: "", imageThree: "", type: "", description: "", category: "", duration: "", technologies: "", livePreview: "", sourceCode: "", update: "", });

    const loadProject = async () => {
        const url = `${process.env.REACT_APP_findProject}/${id}`;
        const result = await axios.get(url);
        setProject(result.data);
        setLodaing(true);
    };
    useEffect(() => {
        loadProject();
    }, [project]);


    const [modalIsOpen, setIsOpen] = useState(true);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }



    const getView = () => {
        return (
            project.update === "updating" ? (
                <>
                    <Comedown
                        modalIsOpen={modalIsOpen}
                        openModal={openModal}
                        closeModal={closeModal} 
                        id={id}/>
                    <ProjectInfo
                        loading={loading}
                        project={project}
                        openModal={openModal} />
                </>
            ) : (<ProjectInfo loading={loading} project={project} />)
        );
    };

    return (
        <>
            <AllNavbar><NavBar /></AllNavbar>
            {getView()}
        </>
    );
};

export default ProjectDetails;