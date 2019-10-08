import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/Cart-Icon';
import CartDropdown from '../cart-dropdown/CartDropdown';

type Props = {
	currentUser: any;
	hidden: any;
};

const Header: React.FC<Props> = ({ currentUser, hidden }) => (
	<div className="header">
		<Link to="/" className="logo-container">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/shop">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					{' '}
					SIGNOUT
				</div>
			) : (
				<Link className="option" to="/signin">
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{!hidden ? <CartDropdown /> : null}
	</div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }: { user: any; cart: any }) => ({
	currentUser,
	hidden
});

export default connect(mapStateToProps)(Header);
