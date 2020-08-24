import React from 'react';
import ImagesContainer from '../containers/ImagesContainer';
import SearchBar from './SearchBar';

class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="main-container">
					<SearchBar />
					<div className="container">
						<ImagesContainer />
					</div>
				</div>
			</div>
		);
	}
}
export default Home;
