import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';


import Search from './components/users/search';
import ErrorMsg from './components/layouts/ErrMsgAlert';
import About from './components/Pages/AboutUs';
import Profile from './components/users/Profile';

import GithubState from './context/github/GithubState';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [errMsg, setErrMsg] = useState(null);
  const [repos, setrepos] = useState([]);

  // calling api for listing users 
  useEffect(() => {
    setLoading(true);
    Axios.get('https://api.github.com/users')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
    //eslint-disable-next-line
  }, []);

  // search github users 
  const searchUsers = async text => {
    setLoading(true);
    const res = await Axios.get(`https://api.github.com/search/users?q=${text}`);
    setUsers(res.data.items);
    setLoading(false);
    //eslint-disable-next-line
  }

  // get single user 
  const getProfile = async username => {
    setLoading(true);
    const res = await Axios.get(`https://api.github.com/users/${username}`);
    setUser(res.data);
    setLoading(false);
  }

  // get single user 
  const getProfileRepos = async username => {
    setLoading(true);
    const res = await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
    setrepos(res.data);
    setLoading(false);
  }

  const errMsgFn = (errmsg, type) => {
    setErrMsg({ errmsg, type })
    setTimeout(() =>
      setErrMsg(null)
      , 5000)
  }

  // hide search input box empty field error
  const hideErrMsg = () => {
    setErrMsg(null);
  }

  return (
    <GithubState>
      <Router>
        <React.Fragment>
          {/* {console.log(process.env.REACT_APP_PROJECT_NAME)}
        {console.log(process.env.REACT_APP_PURPOSE)} */}
          <Navbar title='Github Finder' />
          <div className="container-fluid mt-5 pt-5">
            <ErrorMsg errMsg={errMsg} hideErrMsg={hideErrMsg} />
            <Switch>
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <Search searchUsers={searchUsers} errMsgFn={errMsgFn} />
                  <Users loading={loading} users={users} />
                </React.Fragment>
              )} />
              <Route exact path="/aboutus" component={About} />
              <Route exact path="/profile/:login" render={props => (
                <Profile {...props} getProfile={getProfile} user={user} getProfileRepos={getProfileRepos} repos={repos} loading={loading} />
              )} />
            </Switch>
          </div>
        </React.Fragment >
      </Router>
    </GithubState>
  );
}

export default App;
