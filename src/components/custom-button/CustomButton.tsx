import React from 'react';
import './custombutton.scss';
type Props = {
	children: React.ReactNode;
	onClick?: any;
	isGoogleSignIn?: boolean;
	type: 'submit' | 'reset' | 'button';
	inverted?: boolean;
};

const CustomButton: React.FC<Props> = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
	<button
		className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button `}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
