import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { render } from 'react-dom';

class ImageCard extends React.Component {
	// const {name, image, location} = props.image

	render() {
		console.log('hi', this.props);
		return (
			<Card>
				{/* className="image-card" onClick={() => props.handleImageGoBack(props.image)}>
				<Image src={image.image} className="solo-image" />
				<Card.Content>
					<h3>image.name</h3>
				</Card.Content> */}
			</Card>
		);
	}
}
export default ImageCard;
