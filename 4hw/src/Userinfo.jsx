import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {
    const userData = useSelector(state => state.user.user);

    return (
        <div>
            <h2>User Information</h2>
            <p>Name: {userData.name}</p>
            <p>Age: {userData.age}</p>
            <p>Gender: {userData.gender}</p>
        </div>
    );
};

export default UserInfo;