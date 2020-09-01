import React from 'react';
import './App.css';
import Home from './components/Home';
import Opener from './components/Opener';
import Lazyload from 'react-lazyload';

import { Route, BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Route exact path="/" component={Opener} />
					<Route path="/home" component={Home} />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
