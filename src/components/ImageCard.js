import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ImageCard = (props) => {
	return (
		<div className="one-card">
			{/* <Card> */}
			<img src={props.image.image} className="solo-image" />
			{/* <Card.Content> */}
			<div className="content">
				<ul>
					<h3>
						<li>{props.image.name}</li>
						<li>{props.image.location}</li>
						<li>{props.image.continent}</li>
					</h3>
				</ul>
			</div>
			{/* </Card.Content> */}
			{/* </Card> */}
		</div>
	);
};

export default ImageCard;
