import React from 'react';

import './collection.scss';
import { Item } from '../../types/shoppage';
import CollectionItem from '../collection-item/CollectionItem';

type Props = {
	title: string;
	items: Item[];
};

const Collection: React.FC<Props> = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items.filter((item, idx) => idx < 4).map((item) => <CollectionItem key={item.id} {...item} />)}
			</div>
		</div>
	);
};

export default Collection;
