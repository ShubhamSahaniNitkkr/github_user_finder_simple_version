import React from 'react';
import GithubContext from './githubContext';

const GithubState = (props) => (
  <GithubContext.Provider
    value={{
      users: [],
      user: {},
      repos: [],
      loading: false,
    }}
  >
    {props.children}
  </GithubContext.Provider>
);

export default GithubState;
