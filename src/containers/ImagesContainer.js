import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Images from '../components/Images';

class ImagesContainer extends Component {
	state = {
		images: [],
		// image: {},
		sortValue: '',
		inputValue: ''
	};

	componentDidMount() {
		fetch('http://localhost:3000/images').then((resp) => resp.json()).then((resp) => {
			//  console.log(petsData)
			this.setState({
				images: resp
			});
		});
	}

	imageFilterOnChange = (event) => {
		console.log('hi from onChange', event.target.value);
		this.setState({
			inputValue: event.target.value
		});
	};

	handleSortImages = (event) => {
		console.log('this.state.sortValue'.this.state.sortValue);
		this.setState({
			sortValue: event.target.value
		});
	};

	sortImages = (images) => {
		if (this.state.sortValue === 'location') {
			return [ ...images ].sort((a, b) => {
				if (a.location > b.location) {
					return 1;
				} else if (a.location < b.location) {
					return -1;
				} else {
					return 0;
				}
			});
		} else {
			return images;
		}
	};

	render() {
		const filteredImages = this.state.images.filter((image) => {
			return image.location.toLowerCase().includes(this.state.inputValue.toLowerCase());
		});

		return (
			<div>
				<Images
					// key={this.state.id} images={this.state.images}
					images={this.sortImages(filteredImages)}
				/>
				<SearchBar imageFilterOnChange={this.imageFilterOnChange} onChange={this.handleSortImages} />
			</div>
		);
	}
}

export default ImagesContainer;
