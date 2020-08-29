import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Images from '../components/Images';
import ImageViewer from '../components/ImageViewer';

class ImagesContainer extends Component {
	state = {
		images: [],
		image: {},
		sortValue: '',
		inputValue: '',
		isCardViewOn: false,
		clicked: false
	};

	componentDidMount() {
		fetch('http://localhost:3000/images').then((resp) => resp.json()).then((resp) => {
			this.setState({
				images: resp
			});
		});
	}

	handleCardView = (cardItem) => {
		this.setState({
			image: cardItem,
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
		console.log('this.state', this.state, 'this.state.image', this.state.image);
		const filteredImages = this.state.images.filter((image) => {
			return image.location.toLowerCase().includes(this.state.inputValue.toLowerCase());
		});

		return (
			<div>
				{this.state.isCardViewOn ? (
					<ImageViewer image={this.state.image} />
				) : (
					<div>
						<SearchBar
							images={this.sortImages(filteredImages)}
							handleCardView={this.handleCardView}
							imageFilterOnChange={this.imageFilterOnChange}
							inputValue={this.state.inputValue}
							onChange={this.handleSortImages}
							// key={this.state.id}
							// images={this.state.images}
						/>
					</div>
				)}
			</div>
		);
	}
}

export default ImagesContainer;
