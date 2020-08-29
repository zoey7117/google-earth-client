import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Images from '../components/Images';
import ImageViewer from '../components/ImageViewer';

let CardId;

class ImagesContainer extends Component {
	state = {
		images: [],
		image: {},
		sortValue: '',
		inputValue: '',
		isCardViewOn: false,
		selectedCard: 0
	};
	// handleClick = (id) => {
	// 	this.setState({ selected: id });
	// };

	// v;

	componentDidMount() {
		fetch('http://localhost:3000/images').then((resp) => resp.json()).then((resp) => {
			this.setState({
				images: resp
			});
		});
	}

	handleCardView = (cardId) => {
		console.log('click', cardId);
		this.setState({
			selectedCard: cardId,
			image: cardId,
			isCardViewOn: !this.state.isCardViewOn
		});
	};

	imageFilterOnChange = (event) => {
		console.log('hi from onChange', event.target.value);
		this.setState({
			inputValue: event.target.value
		});
	};

	sortImages = (images) => {
		if (this.state.sortValue === 'continent') {
			return [ ...images ].sort((a, b) => {
				if (a.continent > b.continent) {
					return 1;
				} else if (a.continent < b.continent) {
					return -1;
				} else {
					return 0;
				}
			});
		} else {
			return images;
		}
	};

	handleImageHome = () => {
		this.setState({
			image: {},
			isImageViewOn: false
		});
	};

	renderSingleImage = (cardId) => {
		console.log(cardId);
	};

	render() {
		const imageId = this.state.image;
		console.log(
			'this.state',
			this.state,
			'this.state.image',
			this.state.image,
			'this.state.id',
			this.state.id,
			'imageId',
			imageId,
			'this.state.image.id',
			this.state.image.id
		);
		const filteredImages = this.state.images.filter((image) => {
			console.log('image, line 89', image, 'image.continent', image.continent);
			return image.location.toLowerCase().includes(this.state.inputValue.toLowerCase());
		});

		return (
			<div>
				{this.renderSingleImage()}
				{this.state.isCardViewOn ? (
					<ImageViewer
						image={this.state.image}
						handleImageHome={this.handleImageHome}
						selectImageId={this.state.image}
					/>
				) : (
					<div>
						<Images
							key={this.state.id}
							images={this.state.images}
							images={this.sortImages(filteredImages)}
							handleCardView={this.handleCardView}
						/>
						<SearchBar
							images={this.sortImages(filteredImages)}
							handleCardView={this.handleCardView}
							imageFilterOnChange={this.imageFilterOnChange}
							inputValue={this.state.inputValue}
							onChange={this.handleSortImages}
						/>
					</div>
				)}
			</div>
		);
	}
}

export default ImagesContainer;
