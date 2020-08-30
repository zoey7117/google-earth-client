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
					<h4>
						<li>name: {props.image.name}</li>
						<li>location: {props.image.location}</li>
						<li>continent: {props.image.continent}</li>
					</h4>
				</ul>
			</div>
			{/* </Card.Content> */}
			{/* </Card> */}
		</div>
	);
};

export default ImageCard;
