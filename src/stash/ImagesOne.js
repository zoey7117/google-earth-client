import React from 'react';
import ImageCard from './ImageCard';
import { Link } from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react';

class Images extends React.Component {
	state = {
		image: []
	};
	// console.log(props);

	cardClickHandler = (e) => {
		let cardId = e.target.dataset.id;
		this.props.images.find((image) => {
			return image.id === cardId;
		});
		console.log('hi, cardId', cardId);
		fetch(`http://localhost:3000/images/${cardId}`)
			.then((resp) => resp.json())
			// .then(console.log);
			.then((resp) => {
				this.setState({
					image: resp
				});
				console.log(this.state.image);
			});
		// console.log('click', 'e.target', e.target, 'e.target.dataset.id', e.target.dataset.id, this.props);
	};

	render() {
		const allimages = this.props.images;

		return allimages.map((photo) => {
			return (
				<Card
					key={photo.id}
					className="photo"
					data-id={photo.id}
					data-name={photo.name}
					// onClick={(e) => this.cardClickHandler(e)}
					onClick={this.cardClickHandler}
				>
					<Image
						src={photo.image}
						alt=""
						data-id={photo.id}
						data-name={photo.name}
						className="photo-image"
						height={265}
					/>
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
