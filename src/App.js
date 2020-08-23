import React from 'react';
import './App.css';
import ImagesContainer from './containers/ImagesContainer';
import SearchBar from './components/SearchBar';

function App() {
	return (
		<div>
			<div className="main-container">
				<div className="searchBar">
					<SearchBar />
				</div>
				<div className="container">
					<ImagesContainer />
				</div>
			</div>
		</div>
	);
}

export default App;
