import React from 'react';
import './custombutton.scss';
type Props = {
	children: React.ReactNode;
	onClick?: any;
	isGoogleSignIn: boolean;
};

const CustomButton: React.FC<Props> = ({ children, isGoogleSignIn, ...otherProps }) => (
	<button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button `} {...otherProps}>
		{children}
	</button>
);

export default CustomButton;
