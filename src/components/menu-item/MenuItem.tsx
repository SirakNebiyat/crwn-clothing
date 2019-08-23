import React from 'react';
import './menu-item.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';
type IProps = RouteComponentProps<any> & {
	title: string;
	imageUrl: string;
	size?: string;
	linkUrl: string;
};

const MenuItem: React.FC<IProps> = ({ title, imageUrl, size, history, match, linkUrl }) => (
	<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);
