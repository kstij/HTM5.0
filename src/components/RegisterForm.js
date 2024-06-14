// src/RegisterForm.js
import React, { useState } from 'react';
import './RegisterForm.css';
import { createEntry } from './contentfulService';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        institution: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createEntry(formData);
            alert('Registration successful!'); // Show success message
            setFormData({
                name: '',
                email: '',
                phone: '',
                institution: '',
            });
        } catch (error) {
            console.error('Error registering:', error);
            alert('Registration failed. Please try again later.'); // Show error message
        }
    };

    return (
        <div className="register-form-container">
            <h2>Register for Hackathon</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Institution:</label>
                    <input type="text" name="institution" value={formData.institution} onChange={handleChange} required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
