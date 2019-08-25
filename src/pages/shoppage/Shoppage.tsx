import React, { Component } from 'react';
import { SHOP_DATA } from './mock-data.js';
import Collection from '../../components/preview-collection/Collection';

export default class ShopPage extends Component {
	state = {
		collections: SHOP_DATA
	};
	render () {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{collections.map(({ id, ...otherCollectionProps }) => (
					<Collection key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}
