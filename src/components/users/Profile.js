import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Loader from "../layouts/spinner";

import UserRepos from "../repos/Repos";

const Profile = ({
  user,
  loading,
  repos,
  match,
  getProfile,
  getProfileRepos
}) => {
  useEffect(() => {
    getProfile(match.params.login);
    getProfileRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    // name,
    company,
    bio,
    // public_repos,
    // updated_at,
    // created_at,
    // avatar_url,
    html_url,
    hireable,
    email
  } = user;

  if (loading) return <Loader />;
  return (
    <React.Fragment>
      <div className="card-columns ">
        <div
          className="card bg-light shadow p-3 mb-5 bg-white rounded"
          style={{ maxWidth: "100%%", margin: "auto" }}
        >
          <div className="card-header">Profile</div>
          <div className="card-body">
            <h5 className="card-title">Bio &nbsp; {bio}</h5>
            <p className="card-text">
              Hirable : &nbsp;
              {hireable ? (
                <i className="icon-ok text-success"></i>
              ) : (
                <i className="icon-remove text-danger"></i>
              )}
            </p>
            {email && <p className="card-text">Email: &nbsp;{email} </p>}

            {company && <p className="card-text">Company : &nbsp;{company}</p>}
            {html_url && (
              <a href={html_url} className="btn btn-outline-success">
                Visit Profile
              </a>
            )}
          </div>
        </div>
        {/* <div className="card">
                        <img src={avatar_url} className="card-img-top" alt="..." />
                    </div> */}
      </div>
      <UserRepos repos={repos} />
    </React.Fragment>
  );
};

Profile.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
  getProfileRepos: PropTypes.func.isRequired
};

export default Profile;
