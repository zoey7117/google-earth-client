import React from 'react';

class ImagesContainer extends React.Component {
	componentDidMount() {
		fetch('http://localhost:3000/images')
			// .then((resp) => resp.json()).then(console.log);
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data) => {
				// Work with JSON data here
				console.log(data);
			})
			.catch((err) => {
				// Do something for an error here
				console.log('Error Reading data ' + err);
			});
	}
	render() {
		return <div />;
	}
}
export default ImagesContainer;
