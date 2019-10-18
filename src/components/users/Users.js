import React from 'react';
import SingleUser from './singleUser';
import Spinner from '../layouts/spinner';
import PropTypes from 'prop-types'


const Users = ({ users, loading }) => {
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="row">
                {users.map(user => (
                    <SingleUser key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Users 
