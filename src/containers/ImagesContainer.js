import React from 'react';
import Images from '../components/Images';
import SearchBar from '../components/SearchBar';

class ImagesContainer extends React.Component {
	state = {
		images: [],
		image: {},
		isImageViewOn: false,
		sortValue: '',
		inputValue: ''
	};

	imageFilter = (e) => {
		console.log(e.target);
		this.setState({
			inputValue: e.target.value
		});
	};

	componentDidMount() {
		fetch('http://localhost:3000/images').then((resp) => resp.json()).then((resp) => {
			this.setState({ images: resp });
		});
	}
	onChange = () => {};

	render() {
		console.log(this.state);
		const filteredImages = this.state.images.filter((image) => {
			return image.name.toLowerCase().includes(this.state.inputValue.toLowerCase());
		});

		return (
			<div>
				<Images key={this.state.id} images={this.state.images} handleImageView={this.handleImageView} />
				<SearchBar inputValue={this.inputValue} imageFilter={filteredImages} />
			</div>
		);
	}
}
export default ImagesContainer;
