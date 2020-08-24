import React from 'react';

const ImageItem = (props) => {
	const { name, img } = props.image;

	return (
		<div className="image-item-container">
			<div className="image-item" onClick={() => props.handleImageView(props.image)}>
				<div className="image-img-div">
					<img className="image-img" src={img} alt={name} />
				</div>
				<div className="image-info">
					<h2>{name} </h2>
				</div>
				<div className="clear" />
			</div>
		</div>
	);
};

export default ImageItem;
