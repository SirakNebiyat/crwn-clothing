import React from 'react';

import CustomButton from '../custom-button/CustomButton';
import './cart-dropdown.scss';
import { connect } from 'react-redux';
import { Item } from '../../types/shoppage';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter, RouteComponentProps } from 'react-router';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown: React.FC<RouteComponentProps<any>> = ({ cartItems, history, dispatch }: any) => (
	<div className="cart-dropdown">
		{console.log(cartItems)}
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map((cartItem: Item) => <CartItem key={cartItem.id} item={cartItem} />)
			) : (
				<span className="empty-message">Your cart is empty</span>
			)}
		</div>
		<CustomButton
			onClick={() => {
				history.push('./checkout');
				dispatch(toggleCartHidden());
			}}
			type="button"
		>
			GO TO CHECKOUT
		</CustomButton>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
