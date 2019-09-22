import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/Shoppage';
import Header from './components/header/Header';
import SigninSignup from './pages/signin-signup/SigninSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component<any> {
	unsubscribeFromAuth: any = null;

	componentDidMount () {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef!.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			}

			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount () {
		this.unsubscribeFromAuth();
	}

	render () {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signin" component={SigninSignup} />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: any) => ({
	setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
