import React from 'react';

const ImageCard = (props) => {
	const { name, img, location } = props.image;

	return (
		<div className="dog-card-container">
			<div className="dog-card" onClick={() => props.handleImageGoBack(props.image)}>
				<img className="dog-card-img" src={img} alt={name} title={name} />
				<h2>
					<b>Name : </b>
					{name}{' '}
				</h2>

				<p>
					<b>Location : </b> {location}
				</p>

				<div className="clear" />
			</div>
		</div>
	);
};

export default ImageCard;
