import React, { Component } from 'react';

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
                    name="fName"
                    type="text"
                    size={40}
                    placeholder="First Name of your Child"
                    onChange={ this.handleChange }
                    value={ this.props.fName }
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