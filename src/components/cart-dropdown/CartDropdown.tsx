import React from 'react';
import CustomButton from '../custom-button/CustomButton';

import './cart-dropdown.scss';

const CartDropdown: React.FC = () => (
	<div className="cart-dropdown">
		<div className="cart-items" />
		<CustomButton type="button">GO TO CHECKOUT</CustomButton>
	</div>
);

export default CartDropdown;
