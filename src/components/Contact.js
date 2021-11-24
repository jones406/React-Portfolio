
import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './style.css';

function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'firstName' ? setFirstName(value) : setLastName(value);
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Alert the user their first and last name, clear the inputs
        alert(`Hello ${firstName} ${lastName} your form has been successfully sent!`);
        setFirstName('');
        setLastName('');
    };

    return (
        <div>
            <p>
                Hello {firstName} {lastName}
            </p>
            <form className="form">
                <input
                    value={firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="First Name"
                />

                <input
                    value={lastName}
                    name="lastName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Last Name"
                />

                <Button type="button" onClick={handleFormSubmit} color="secondary">SUBMIT</Button>
            </form>
        </div>
    );
}

export default Contact;