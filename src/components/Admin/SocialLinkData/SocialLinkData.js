import React from 'react';
import './SocialLinkData.css';


const SocialLinkData = (props) => {
    const { socialName, socialURL, _id } = props.Array;

    function deleteSocialLink(e, id) {
        fetch(`https://gentle-fjord-53714.herokuapp.com/deleteSingleSocialLink/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert(`${socialName}  Delete successful`)
                }
            });

    };
    function updaetSingleSocialLink(id) {
        fetch(`https://gentle-fjord-53714.herokuapp.com/singleSocialLink/${id}`)
            .then(res => res.json())
            .then(data => {
                const update = document.getElementById('update');
                update.innerHTML = `
                <div class="row">
                    <div class="input-group mb-3 col-md-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Update Name:~</span>
                        </div>
                        <input id="name" value="${data.socialName}" type="text" class="form-control" placeholder="name" aria-label="Username" aria-describedby="basic-addon1">
                    </div>

                    <div class="input-group mb-3 col-md-7">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon3">Update vanity URL:~</span>
                        </div>
                        <input type="text" value="${data.socialURL}" class="form-control" id="url" aria-describedby="basic-addon3">
                    </div>
                    <div class="col-md-1">
                        <button onclick="updateSocialLink('${data._id}')" type="submit" class="btn btn-primary">Update</button>
                    </div>
                </div>
                `;
            })

    };
    return (
        <div className="socialLinkData" >
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">{_id}</th>
                        <td>{socialName}</td>
                        <td>{socialURL}</td>
                        <td><button onClick={(e) => deleteSocialLink(e, _id)} type="submit" className="btn btn-danger">Delete</button><button onClick={() => updaetSingleSocialLink(_id)} type="submit" className="btn btn-primary">Update</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SocialLinkData;

