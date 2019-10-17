import React from 'react';
import PropTypes from 'prop-types';
import SingleRepo from './SingleRepo';

const Repos = ({ repos }) => {
    return repos.map(repo => <SingleRepo key={repo.id} repo={repo} />);
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired
}

export default Repos;
