import React from 'react';
import './signinsignup.scss';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/Signup';
const SigninSignup: React.FC = () => (
	<div className="signin-signup">
		<SignIn />
		<SignUp />
	</div>
);

export default SigninSignup;
