import React, { Component } from 'react';
import * as routes from '../constants/routes';
import { auth, db } from '../firebase/firebase';
import styled from 'styled-components';

class AddChild extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        alert(`Your child, ${this.state.firstName} ${this.state.lastName}, was added successfully!`)

        var user = auth.currentUser.email;
        console.log(user)

        db.ref('child').push({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            user
        })

        this.setState({
            firstName: '',
            lastName: ''
        });
    }

    render() {
        return (
            <div className="AddChild">
                <label>
                    First Name: 
                    <input
                        name="firstName"
                        type="text"
                        size={40}
                        placeholder="First Name of your Child"
                        onChange={ this.handleChange }
                        value={ this.state.firstName }
                    />
                </label>
                <br />
                <label>
                    Last Name: 
                    <input
                        name="lastName"
                        type="text"
                        size={40}
                        placeholder="Last Name of your Child"
                        onChange={ this.handleChange }
                        value={ this.state.lastName }
                    />
                </label>
                <br />
                <button
                    type="submit"
                    onClick={ this.handleSubmit }    
                >
                    Submit
                </button>
            </div>
        )
    }
}

export default AddChild;