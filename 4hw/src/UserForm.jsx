import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const UserForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ name: '', age: '', gender: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_USER', payload: formData });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="text" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
            <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;