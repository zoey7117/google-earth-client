import React, { Fragment } from 'react';
import ImageCard from './ImageCard';
import { Link } from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react';

class Images extends React.Component {
	render() {
		console.log(this.props);
		const allimages = this.props.images;

		return allimages.map((photo) => {
			return (
				<Card
					key={photo.id}
					className="photo"
					// onClick={() => props.handleCardView(props.images)}
					data-id={photo.id}
					data-name={photo.name}
					// onClick={(e) => this.cardClickHandler(e)}
					// onClick={this.cardClickHandler}
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
