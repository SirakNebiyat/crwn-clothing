import React from 'react';

import CustomButton from '../custom-button/CustomButton';
import './cart-dropdown.scss';
import { connect } from 'react-redux';
import { Item } from '../../types/shoppage';
import CartItem from '../cart-item/CartItem';

const CartDropdown: React.FC = ({ cartItems }: any) => (
	<div className="cart-dropdown">
		{console.log(cartItems)}
		<div className="cart-items">
			{cartItems.map((cartItem: Item) => <CartItem key={cartItem.id} item={cartItem} />)}
		</div>
		<CustomButton type="button">GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = ({ cart: { cartItems } }: { cart: any }) => ({
	cartItems: cartItems
});

export default connect(mapStateToProps)(CartDropdown);
