import React from 'react';

const ProjectData = (props) => {

    const { _id, projectImage, projectName, projectType, projectCategory, projectDuration, technologies, livePreview, sourceCode } = props.Array;

    function deleteProjectInfo(event, id) {
        fetch(`https://gentle-fjord-53714.herokuapp.com/deleteProjectInfo/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert(`${projectName}  Delete successful`)
                }
            });
    };
    function updaetProjectInfo(id) {
        fetch(`https://gentle-fjord-53714.herokuapp.com/singleProject/${id}`)
            .then(res => res.json())
            .then(data => {
                const projectUpdate = document.getElementById('projectUpdate');
                projectUpdate.innerHTML = `

            <div class="row">
                <div class="input-group mb-3 col-md-6">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Update Image</span>
                    </div>
                    <input id="pImage" value="${data.projectImage}" type="text" class="form-control" placeholder="image" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3 col-md-6">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Update Name</span>
                    </div>
                    <input id="pName" value="${data.projectName}" type="text" class="form-control" placeholder="name" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3 col-md-6">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Update Type</span>
                    </div>
                    <input id="pType" value="${data.projectType}" type="text" class="form-control" placeholder="type" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3 col-md-6">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Update Category</span>
                    </div>
                    <input id="pCategory" value="${data.projectCategory}" type="text" class="form-control" placeholder="category" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3 col-md-6">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Update Duration</span>
                    </div>
                    <input id="pDuration" value="${data.projectDuration}" type="text" class="form-control" placeholder="duration" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3 col-md-6">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Update technologies</span>
                    </div>
                    <input id="pTechnologies" value="${data.technologies}" type="text" class="form-control" placeholder="technologies" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3 col-md-6">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Update Live Preview</span>
                    </div>
                    <input id="plivePreview" value="${data.livePreview}" type="text" class="form-control" placeholder="live preview" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3 col-md-5">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Update Live Source Code</span>
                    </div>
                    <input id="psourceCode" value="${data.sourceCode}" type="text" class="form-control" placeholder="source code" aria-label="Username" aria-describedby="basic-addon1">
                    
                </div>
                <div class="col-md-1">
                    <button class="btn btn-primary" onclick="updatePinfo('${data._id}')">Submit</button>
                </div>
            </div>
            
            `;
            })
    }

    return (
        <div>
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">{_id}</th>
                        <th><img className="admin-img" src={projectImage} alt="" /></th>
                        <td>{projectName}</td>
                        <td>{projectType}</td>
                        <td>{projectCategory}</td>
                        <td>{projectDuration}</td>
                        <td>{technologies}</td>
                        <td><button onClick={(e) => deleteProjectInfo(e, _id)} type="submit" className="btn btn-danger">Delete</button><button onClick={() => updaetProjectInfo(_id)} type="submit" className="btn btn-primary">Update</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProjectData;




            // <div className="data">
            //     <p><b><i>id:</i></b> {_id}</p>
            //     <p><b><i>Image:</i></b> {projectImage}</p>
            //     <p><b><i>Name:</i></b> {projectName}</p>
            //     <p><b><i>Type:</i></b> {projectType}</p>
            //     <p><b><i>Category:</i></b> {projectCategory}</p>
            //     <p><b><i>Duration:</i></b> {projectDuration}</p>
            //     <p><b><i>Technologies:</i></b> {technologies}</p>
            //     <p><b><i>Live Preview:</i></b> {livePreview}</p>
            //     <p><b><i>Source Code:</i></b> {sourceCode}</p>
            //     <button className="no-drop" onClick={(e) => deleteProjectInfo(e, _id)}>Delete</button>
            //     <button onClick={() => updaetProjectInfo(_id)}>update</button>
            //     <br /><br />
            // </div>