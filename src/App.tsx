import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/Homepage';

const Hatspage: React.FC = () => <div>hej</div>;
const App: React.FC = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/hatspage" component={Hatspage} />
			</Switch>
		</div>
	);
};

export default App;
