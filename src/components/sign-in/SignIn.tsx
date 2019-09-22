import React, { Component } from 'react';

import './signin.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
type State = {
	email: string;
	password: string;
};

export default class SignIn extends Component<any, State> {
	state = {
		email: '',
		password: ''
	};

	handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);

			this.setState({
				email: '',
				password: ''
			});
		} catch (error) {
			console.log(error);
		}
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
