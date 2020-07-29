import React, { Component } from 'react';
import './signin.scss';
import FormInput from './../Form-Input/formInput';
import Button from '../button/button';

export default class Signin extends Component {
    constructor() {
        super();

        this.state = {
            email: 'user@example.com',
            password: 'password'
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>Already have an account?</h2>
                <span>Sign in with your email & password!</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email"
                    type="email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label="Email"
                    required />

                    <FormInput name="password"
                    type="password"
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label="Password"
                    required />

                    <Button type="submit">
                        Sign In
                    </Button>
                </form>
            </div>
        )
    }
}
