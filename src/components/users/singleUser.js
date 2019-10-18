import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const singleUser = ({ user: { login, avatar_url, html_url, name } }) => {
    return (
        <div className="col-md-3">
            <div className="card shadow-sm p-3 mb-3 mt-3 bg-white rounded ">
                <img src={avatar_url} className="card-img-top" alt={login} />
                <div className="card-body">
                    <h5 className="card-title bg-info text-white text-capitalize p-2">{login}</h5>
                    <p className="card-text text-primary">Profile Url:</p>
                    <p className="card-text text-primary">{html_url}</p>
                    <Link to={`/profile/${login}`} className="btn btn-primary">Visit Profile</Link>
                </div>
            </div>
        </div>
    )
}

singleUser.prototype = {
    user: PropTypes.object.isRequired
}
export default singleUser;
