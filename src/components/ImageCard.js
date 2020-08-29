import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { render } from 'react-dom';

class ImageCard extends React.Component {
	// const {name, image, location} = props.image

	render() {
		const { image } = this.props;
		console.log(
			'hi',
			'this.props',
			this.props,
			'this.props.image',
			this.props.image,
			'this.props.photo',
			this.props.photo,
			'this.props.location',
			this.props.location
		);
		return (
			<Card>
				<Image src={image.image} className="solo-image" />
				<Card.Content>
					<h3>{image.name}</h3>
				</Card.Content>
			</Card>
		);
	}
}
export default ImageCard;
