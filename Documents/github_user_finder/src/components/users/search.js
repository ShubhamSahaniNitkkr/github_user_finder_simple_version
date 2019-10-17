import React, { Component } from 'react'
import PropTypes from 'prop-types'

class search extends Component {
    state = {
        searchText: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        errMsgFn: PropTypes.func.isRequired,
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        if (this.state.searchText) {
            this.props.searchUsers(this.state.searchText);
        } else {
            this.props.errMsgFn('Please Enter Something', 'danger');
        }
    }

    clearText = (e) => {
        this.setState({ searchText: '' });
    }

    onChamge = e => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <div className="card shadow p-3 mb-5 bg-white rounded ">
                <form onSubmit={this.onFormSubmit} >
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            name="searchText"
                            id="searchText"
                            aria-describedby="searchHelp"
                            placeholder="Search"
                            onChange={this.onChamge}
                            value={this.state.searchText}
                        />
                        <small id="searchHelp"
                            className="form-text text-muted">
                            Enter the Name of the Github user here.
                    </small>
                    </div>
                    <div className="d-flex flex-row-reverse bd-highlight">
                        <button type="submit" className="btn btn-outline-success mr-2"><i className="icon-rocket"></i> Submit</button>
                        &nbsp;
                    {this.state.searchText && (
                            <button className="btn btn-outline-danger ml-2" onClick={this.clearText}><i className="icon-remove"></i> Clear</button>
                        )}
                    </div>
                </form>
            </div >
        )
    }
}

export default search
