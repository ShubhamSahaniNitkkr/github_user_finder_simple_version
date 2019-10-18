import React from 'react';
import PropTypes from 'prop-types';


const SingleRepo = ({ repo }) => {
    return (
        <div className="card mb-3 shadow p-3 mb-5 bg-white rounded" style={{ maxWidth: '100%%', 'margin': 'auto' }}>
            < div className="row no-gutters" >
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Repo Name: {repo.name}</h5>
                        <a href={repo.html_url} className="btn btn-primary">Visit Repo</a>
                    </div>
                </div>
            </div >
        </div >
    )
}

SingleRepo.propTypes = {
    repo: PropTypes.object.isRequired
}

export default SingleRepo
