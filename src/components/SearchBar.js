// import React from 'react';
import React, { lazy, Suspense } from 'react';
const Images = lazy(() => import('./Images'));
// import { Card, Image } from 'semantic-ui-react';

// import Images from './Images';

const SearchBar = (props) => {
	return (
		<div>
			<div className="searchBar">
				<div className="search">
					<label htmlFor="search">
						<h4>Search by Name of Country</h4>
					</label>
					<br />
					<input type="text" value={props.inputValue} onChange={props.imageFilterOnChange} />
				</div>
			</div>
			<div className="container">
				{props.images.map((image) => {
					return (
						<Suspense fallback={<div className="loading">still loading</div>}>
							<Images image={image} key={image.id} handleCardView={props.handleCardView} />
						</Suspense>
					);
				})}
			</div>
		</div>
	);
};
export default SearchBar;
