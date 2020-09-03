import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Card, Image } from 'semantic-ui-react';

const Images = (props) => {
	return (
		<Card key={props.id} className="photo" onClick={() => props.handleCardView(props.image)}>
			<LazyLoadImage
				src={props.image.image}
				alt=""
				placeholderSrc={<span />}
				effect="blur"
				data-id={props.id}
				className="photo-image"
				width={265}
				height={265}
			/>
		</Card>
		// <Image src={props.image.image} alt="" data-id={props.id} className="photo-image" height={265} />
		// </Card>
	);
};
export default Images;
