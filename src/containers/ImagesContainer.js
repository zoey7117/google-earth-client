import React from 'react';
import Images from '../components/Images';

class ImagesContainer extends React.Component {
	state = {
		images: [],
		image: {},
		isImageViewOn: false,
		sortValue: '',
		inputValue: ''
	};

	imageFilter = (e) => {
		this.setState({
			inputValue: e.target.value
		});
	};

	componentDidMount() {
		fetch('http://localhost:3000/images').then((resp) => resp.json()).then((resp) => {
			this.setState({ images: resp });
		});
	}

	render() {
		console.log(this.state);
		const filteredImages = this.state.images.filter((image) => {
			return image.name.toLowerCase().includes(this.state.inputValue.toLowerCase());
		});

		return (
			<div>
				<Images
					key={this.state.id}
					images={this.state.images}
					imageFilter={this.filteredImages}
					handleImageView={this.handleImageView}
					inputValue={this.inputValue}
				/>
			</div>
		);
	}
}
export default ImagesContainer;
