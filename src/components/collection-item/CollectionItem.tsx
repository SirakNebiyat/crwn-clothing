import React from 'react';

import './collection-item.scss';
import { Item } from '../../types/shoppage';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

type Props = {
	item: Item;
	addItem: any;
};

const CollectionItem: React.FC<Props> = ({ item, addItem }) => {
	const { id, name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton type="button" inverted onClick={() => addItem(item)}>
				Add to Cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch: any) => ({
	addItem: (item: Item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
