import React from 'react';
import './menu-item.scss';

interface IProps {
	title: string;
	imageUrl: string;
	size?: string;
}

const MenuItem: React.FC<IProps> = ({ title, imageUrl, size }) => (
	<div className={`${size} menu-item`}>
		<div
			className="background-image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<div className="content">
			<div className="title">{title.toUpperCase()}</div>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);

export default MenuItem;
