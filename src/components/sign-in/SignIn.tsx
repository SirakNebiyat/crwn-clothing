import React, { Component } from 'react';

import './signin.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';
type State = {
	email: string;
	password: string;
};

export default class SignIn extends Component<any, State> {
	state = {
		email: '',
		password: ''
	};

	handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		this.setState({
			email: '',
			password: ''
		});
	};

	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;

		this.setState({ [name]: value } as Pick<State, keyof State>);
	};

	render () {
		return (
			<div className="sign-in">
				<h2>I already have an account.</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="email"
						value={this.state.email}
						handleChange={this.handleChange}
						required
						label="Email"
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
						label="Password"
					/>

					<div className="buttons">
						<CustomButton type="button" isGoogleSignIn={false}>
							Sign in
						</CustomButton>
						<CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
