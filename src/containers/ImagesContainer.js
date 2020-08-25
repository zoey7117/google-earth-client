import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Images from '../components/Images';
import ImageCard from '../components/ImageCard';

class ImagesContainer extends Component {
	state = {
		images: [],
		image: {},
		sortValue: '',
		inputValue: '',
		isImageViewOn: false
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

	// handleSortImages = (event) => {
	// 	console.log('this.state.sortValue'.this.state.sortValue);
	// 	this.setState({
	// 		sortValue: event.target.value
	// 	});
	// };

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

	handleImageView = (imageItem) => {
		//  console.log("click", petItem)
		this.setState({
			image: imageItem,
			isImageViewOn: !this.state.isImageViewOn
		});
	};

	handleImageGoBack = () => {
		this.setState({
			image: {},
			isImageViewOn: false
		});
	};

	render() {
		console.log(this.state);
		const filteredImages = this.state.images.filter((image) => {
			return image.location.toLowerCase().includes(this.state.inputValue.toLowerCase());
		});

		return (
			<div>
				<Images
					// key={this.state.id} images={this.state.images}
					images={this.sortImages(filteredImages)}
					// <select name="sortValue" onChange={this.handleSortPets}>
				/>
				<div className="container">
					{this.state.isImageViewOn ? (
						<ImageCard image={this.state.image} handleImageGoBack={this.handleImageGoBack} />
					) : (
						<SearchBar
							images={this.sortImages(filteredImages)}
							handleImageView={this.handleImageView}
							imageFilterOnChange={this.imageFilterOnChange}
							inputValue={this.state.inputValue}
							// onChange={this.handleSortImages}
						/>
						// />
						// <SearchBar imageFilterOnChange={this.imageFilterOnChange} onChange={this.handleSortImages}
						// />
					)}
				</div>
			</div>
		);
	}
}

export default ImagesContainer;
