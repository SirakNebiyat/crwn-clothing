import React from 'react';

import './checkoutitem.scss';
import { Item } from '../../types/shoppage';
import { connect, DispatchProp } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem: React.FC<any> = ({
	cartItem,
	clearItem,
	addItem,
	removeItem
}: {
	cartItem: Item;
	clearItem: any;
	addItem: any;
	removeItem: any;
}) => {
	const { name, imageUrl, price, quantity } = cartItem;
	console.log('CartItem', cartItem);
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch: any) => ({
	clearItem: (item: Item) => dispatch(clearItemFromCart(item)),
	addItem: (item: Item) => dispatch(addItem(item)),
	removeItem: (item: Item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
