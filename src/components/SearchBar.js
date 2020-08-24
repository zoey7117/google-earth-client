import React from 'react';

const SearchBar = (props) => {
	console.log(props);
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
		</div>
	);
};
export default SearchBar;
