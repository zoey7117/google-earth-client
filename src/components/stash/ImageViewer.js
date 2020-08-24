import React from 'react';
import ImageCard from './ImageCard';

const ImageViewer = (props) => {
	return (
		<div>
			<buttonCard onClick={props.handleImageGoBack}>Back</buttonCard>
			<ImageCard image={props.image} handleImageGoBack={props.handleImageGoBack} />
		</div>
	);
};

export default ImageViewer;
