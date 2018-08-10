import React, { Component } from 'react';

class AddChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            lName: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        const target = e.target;
        const name = target.name;
        this.setState({
            fName: '',
            lName: ''
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.firebase.ref('child').push({
            fName: this.state.fName,
            lName: this.state.lName
        })
    }

    render() {
        return (
            <form>
                    <label>
                        First Name:
                        <input
                            name="fName"
                            type="text"
                            size={40}
                            placeholder="First Name of your Child"
                            onChange={ this.handleChange }
                            value={ this.props.fName }
                        />
                    </label>
                    <label>
                        Last Name:
                        <input
                            name="lName"
                            type="text"
                            size={40}
                            placeholder="Last Name of your Child"
                            onChange={ this.handleChange }
                            value={ this.props.lName }
                        />
                    </label>
                    <button
                        type="submit"
                        onClick={ this.handleSubmit }    
                    >
                        Submit
                    </button>
            </form>
        )
    }
}

export default AddChild;