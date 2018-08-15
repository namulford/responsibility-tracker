import React, { Component } from 'react';
import * as routes from '../constants/routes';
import { auth, db } from '../firebase';
import styled from 'styled-components';
import config from '../firebase'


class AddChild extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        fName: ''
    }

    handleChange = e => {
        this.setState({
            fName: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.firebase.ref('child').push({
            fName: this.state.fName
        })

        this.setState({
            fName: ''
        })
    }

    render() {
        return (
            <div className="AddChild">
                <input
                    type="text"
                    size={40}
                    placeholder="First Name of your Child"
                    onChange={ this.handleChange }
                    value={ this.state.fName }
                />
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