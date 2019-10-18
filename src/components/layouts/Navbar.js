import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" >
            <Link className="navbar-brand" to="/">
                <i className={icon}></i>
                <span className="align-baseline ml-2 text-info h3 font-weight-bold">{title}</span>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mx-3">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/aboutus">About us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

Navbar.defaultProps = {
    icon: 'icon-github-sign icon-2x text-info',
    title: 'Your Title'
}

Navbar.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Navbar
