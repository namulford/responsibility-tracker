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

    state = {
        firstName: '',
        lastName: ''
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

        db.ref('child').push({
            fName: this.state.firstName,
            lName: this.state.lastName
        })

        this.setState({
            fName: '',
            lName: ''
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
                        value={ this.state.fName }
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
                        value={ this.state.lName }
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