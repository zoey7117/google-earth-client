import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			results: {},
			loading: false,
			message: ''
		};
	}

	// * Fetch the search results and update the state with the result.
	// *
	// * @param {int} updatedPageNo Updated Page No.
	// * @param {String} query Search Query.
	// *

	fetchSearchResults = (query) => {
		// By default the limit of results is 20
		fetch(`http://localhost:3000${query}`).then((resp) => resp.json()).then(console.log);
	};

	// 		 .then((res) => {
	// // 			 const resultNotFoundMsg = !res.data.hits.length
	// // 				 ? 'There are no more search results. Please try a new search.'
	// // 				 : '';
	// // 			 this.setState({
	// // 				 results: res.data.hits,
	// // loading: false,
	// // 			 });
	// // 		 })
	// 		 .catch((error) => {

	//  this.setState({
	// 	 loading: false,
	// 	 message: 'Failed to fetch results.Please check network',
	//  });
	//  }
	// 		 });
	//  };

	handleOnInputChange = (event) => {
		console.log(event.target);
		const query = event.target.value;
		this.setState({ query, loading: true, message: '' }, () => {
			this.fetchSearchResults(query);
		});
	};

	// handleOnInputChange = (event) => {
	// 	const query = event.target.value;
	// 	if ( ! query ) {
	// 		this.setState({ query, results: {}, message: '' } );
	// 	} else {
	// 		this.setState({ query, loading: true, message: '' }, () => {
	// 			this.fetchSearchResults(1, query);
	// 		});
	// 	}
	// };
	render() {
		return (
			<div>
				{/*Heading*/}
				<h2 className="heading">Search by Country</h2>
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						value=""
						id="search-input"
						placeholder="Search..."
						onChange={this.handleOnInputChange}
					/>
					<i className="fa fa-search search-icon" />
				</label>
			</div>
		);
	}
}
export default SearchBar;
