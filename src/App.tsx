import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/Shoppage';
import Header from './components/header/Header';
import SigninSignup from './pages/signin-signup/SigninSignUp';
import { auth } from './firebase/firebase.utils';
class App extends React.Component {
	state = {
		currentUser: null
	};

	unsubscribeFromAuth: any = null;

	componentDidMount () {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
			console.log(user);
		});
	}

	componentWillUnmount () {
		this.unsubscribeFromAuth();
	}

	render () {
		return (
			<div className="App">
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signin" component={SigninSignup} />
				</Switch>
			</div>
		);
	}
}

export default App;
