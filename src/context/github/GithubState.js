import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import { SEARCH_USERS, GET_USERS, CLEAR_USERS, GET_REPOS, SET_LOADING } from '../types';
const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // search users 
    // get users 
    // clear users 
    // get repos 
    //set loading

    return <GithubContext.Provider
        value={{
            // pass all the states and function , that will be available throughout the app 
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading
        }}
    >{props.children}</GithubContext.Provider>
}

export default GithubState;
