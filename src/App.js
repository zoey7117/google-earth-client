import React from 'react';
import './App.css';
import Home from './components/Home';
import ImageCard from './components/ImageCard';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Home />
			{/* <Route path="/image" component={ImageCard} /> */}
		</div>
	);
}

export default App;
