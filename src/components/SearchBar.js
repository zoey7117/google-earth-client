import React from 'react';
import ImageCard from './ImageCard';
import Images from './Images';

const SearchBar = (props) => {
	// console.log(props, 'props.images', props.images);
	return (
		<div>
			<div className="searchBar">
				<div className="search">
					<label htmlFor="search">
						<h3>search by name of country</h3>
					</label>
					<br />
					<input type="text" value={props.inputValue} onChange={props.imageFilterOnChange} />

					<div className="image-list">
						{props.images.map((image) => {
							// console.log(image);
							return <Images image={image} key={image.id} handleCardView={props.handleCardView} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
export default SearchBar;
