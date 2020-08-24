import React from 'react';
import Images from '../components/Images';
import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';
// import ImageItem from '../components/ImageItem';

class ImagesContainer extends React.Component {
	state = {
		images: [],
		image: {},
		inputValue: '',
		sortValue: ''
		// isImageViewOn: false
	};

	imageFilterOnChange = (event) => {
		console.log('hi from onChange', event.target.value);
		this.setState({
			inputValue: event.target.value
		});
	};

	sortImages = (images) => {
		if (this.state.sortValue === 'Name') {
			return [ ...images ].sort((a, b) => {
				if (a.name > b.name) {
					return 1;
				} else if (a.name < b.name) {
					return -1;
				} else {
					return 0;
				}
			});
		} else if (this.state.sortValue === 'Location') {
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

	// handleImageView = (imageItem) => {
	// 	//  console.log("click", petItem)
	// 	this.setState({
	// 		image: imageItem,
	// 		isimageViewOn: !this.state.isimageViewOn
	// 	});
	// };
	// handleImageView = (petItem) => {
	// 	//  console.log("click", petItem)
	// 	this.setState({
	// 		Image: ImageItem,
	// 		isImageViewOn: !this.state.isImageViewOn
	// 	});
	// };

	// handleImageGoBack = () => {
	// 	this.setState({
	// 		Image: {},
	// 		isImageViewOn: false
	// 	});
	// };

	componentDidMount() {
		fetch('http://localhost:3000/images').then((resp) => resp.json()).then((resp) => {
			this.setState({ images: resp });
		});
	}

	render() {
		console.log('this.state.images', this.state.images, 'this.state.images.location', this.state.images.location);
		const filteredImages = this.state.images.filter((image) => {
			return image.location.toLowerCase().includes(this.state.inputValue.toLowerCase());
		});

		return (
			<div>
				<Images key={this.state.id} images={this.state.images} />

				<ImageList
					images={this.sortImages(filteredImages)}
					inputValue={this.state.inputValue}
					imageFilterOnChange={this.imageFilterOnChange}
					// handleImageView={this.handleImageView}
				/>
			</div>
		);
	}
}
export default ImagesContainer;

{
	/* <PetList
	pets={this.sortImages(filteredPets)}
	handlePetView={this.handlePetView}
	petFilterOnChange={this.petFilterOnChange}
	inputValue={this.state.inputValue}
/>; */
}
