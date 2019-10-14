import React from 'react';

import './checkoutitem.scss';
import { Item } from '../../types/shoppage';

const CheckoutItem: React.FC<any> = ({ cartItem: { name, imageUrl, price, quantity } }: { cartItem: Item }) => (
	<div className="checkout-item">
		<div className="image-container">
			<img src={imageUrl} alt="item" />
		</div>
		<span className="name">{name}</span>
		<span className="quantity">{quantity}</span>
		<span className="price">{price}</span>
		<div className="remove-button">&#10005;</div>
	</div>
);

export default CheckoutItem;
