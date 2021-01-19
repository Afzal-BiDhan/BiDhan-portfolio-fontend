import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loading1 from '../../../../../images/lodaing_1.gif';

const ProjectVisit = () => {

    const [projects, setProjects] = useState([]);
    const [loading, setLodaing] = useState(false);
    const [deleteSuccess, setdeleteSuccess] = useState({
        success: "",
    });

    const loadProjects = async () => {
        const url = process.env.REACT_APP_getProjects;
        const result = await axios.get(url);
        setProjects(result.data.reverse());
        setLodaing(true);
    };

    useEffect(() => {
        loadProjects();
    }, [projects]);

    const deleteProject = async (id) => {
        const url = `${process.env.REACT_APP_deleteProject}/${id}`;
        await axios
            .delete(url)
            .then(result => {
                if (result.status === 200) {
                    const successDelete = { ...deleteSuccess };
                    successDelete.success = "Project Delete Successfull";
                    setdeleteSuccess(successDelete);
                };
            })
            .catch(error => {
                console.log(error);
            });
        loadProjects();
    };

    return (
        <div className="container socialVisit projectVisit">
            {loading ? <div className="py-4">
                <h1 className="text-center">Projects</h1>
                <h5 className="text-center text-success mt-3 mb-0">{deleteSuccess.success}</h5>
                <p className="btn btn-primary mr-2">Projects: {projects.length}</p>
                <p className="btn btn-success add_links"><Link to="/admin/projectadd">Add Projects</Link></p>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Img</th>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.map((project, index) => (
                                <tr className="social_tr project_info">
                                    <th scope="row">{index + 1}</th>
                                    <td><img src={project.image} alt="" /></td>
                                    <td>{project.name}</td>
                                    <td>{project.category}</td>
                                    <td>{project.type}</td>
                                    <td>
                                        <Link
                                            to={`/admin/project/${project._id}`}
                                            className="btn btn-primary mr-2">View</Link>
                                        <Link
                                            to={`/admin/edit/project/${project._id}`}
                                            className="btn btn-warning mr-2">Edit</Link>
                                        <Link
                                            onClick={() => deleteProject(project._id)}
                                            className="btn btn-danger">Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div> : <img className="loading_1" src={loading1} alt="" />}
        </div>
    );
};

export default ProjectVisit;