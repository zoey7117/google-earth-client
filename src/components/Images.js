import React from 'react';
import ImageCard from './ImageCard';
import { Link } from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react';

class Images extends React.Component {
	// console.log(props);

	cardClickHandler = () => {
		// localStorage.setItem('selectedCard', photoId);
		console.log('click');
	};

	// renderImages() {
	// 	return this.props.images.map((image) => <ImageCard key={image.id} image={image} />);
	// }

	render() {
		let singlePhoto = '';

		singlePhoto = this.props.images.map((image) => <ImageCard key={image.id} image={image} />);
		// console.log(this.props, this.props.images);
		const allimages = this.props.images;

		return allimages.map((photo) => {
			return (
				<Card key={photo.id} className="photo" onClick={this.cardClickHandler}>
					<Image src={photo.image} alt="" className="photo-image" height={265} />
					{/* <Card.Content>{singlePhoto}</Card.Content> */}
				</Card>
			);
		});
	}
}

export default Images;

{
	/* <Card.Content onClick={this.toggleCard}> */
}
