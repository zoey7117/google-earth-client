import React from 'react';
// import { Card, Input, Loader } from 'semantic-ui-react';

import Images from './Images';

const SearchBar = (props) => {
	return (
		<div>
			<div className="searchBar">
				<div className="search">
					<label htmlFor="search">
						<h4>Search by Name of Country</h4>
					</label>
					<br />

					{/* <Input
						type="text"
						value={props.inputValue}
						onChange={props.imageFilterOnChange}
						className="ui fluid focus input"
						icon="search"
					/> */}

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
