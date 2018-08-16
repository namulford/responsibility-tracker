import React, { Component } from 'react';
import * as routes from '../constants/routes';
import { auth, db } from '../firebase/firebase';
import styled from 'styled-components';

class AddChore extends Component {
    constructor() {
        super();
        this.state = {
            choreName: '',
            starValue: []
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

        var user = auth.currentUser.email;
        console.log(user)

        db.ref('chore').push({
            choreName: this.state.choreName,
            starValue: this.state.starValue,
            user
        })

        this.setState({
            choreName: '',
            starValue: []
        });
    }

    render() {
        return (
            <div className="AddChore">
                <label>
                    Responsibility Name: 
                    <input
                        name="choreName"
                        type="text"
                        size={40}
                        placeholder="Name of Responsibility"
                        onChange={ this.handleChange }
                        value={ this.state.choreName }
                    />
                </label>
                <br />
                <label>
                    Star Value: 
                    <input
                        name="starValue"
                        type="number"
                        size={5}
                        placeholder="How many stars is this worth?"
                        onChange={ this.handleChange }
                        value={ this.state.starValue }
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

export default AddChore;