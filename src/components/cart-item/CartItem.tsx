import React from 'react';
import { Item } from '../../types/shoppage';
import './cart-item.scss';
const CartItem: React.FC<any> = ({ item: { imageUrl, price, name, quantity } }: { item: Item }) => (
	<div className="cart-item">
		{/* {console.log(item)} */}
		<img src={imageUrl} alt="item" />
		<div className="item-details">
			<span className="name">{name}</span>
			<span className="price">
				{quantity} X ${price}
			</span>
		</div>
	</div>
);

export default CartItem;
