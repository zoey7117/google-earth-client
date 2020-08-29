import React from 'react';
import Images from './Images';

const SearchBar = (props) => {
	return (
		<div>
			<div className="searchBar">
				<div className="search">
					<label htmlFor="search">
						<h3>search by name of country</h3>
					</label>
					<br />
					<input type="text" value={props.inputValue} onChange={props.imageFilterOnChange} />
				</div>
			</div>
			<div className="container">
				{props.images.map((image) => {
					return <Images image={image} key={image.id} handleCardView={props.handleCardView} />;
				})}
			</div>
		</div>
	);
};
export default SearchBar;
