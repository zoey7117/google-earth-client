import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Navbar />
			<Route path="/" component={Home} />
		</div>
	);
}

export default App;
