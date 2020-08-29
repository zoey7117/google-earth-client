import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react';

const Images = (props) => {
	return (
		<Card key={props.id} className="photo" onClick={() => props.handleCardView(props.image)}>
			<Image src={props.image.image} alt="" data-id={props.id} className="photo-image" height={265} />
		</Card>
	);
};
export default Images;
