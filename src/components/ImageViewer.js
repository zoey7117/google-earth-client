import React from 'react';
import ImageCard from './ImageCard';

const ImageViewer = (props) => {
	return (
		<div>
			<button onClick={props.handleImageGoBack}>Back</button>
			<ImageCard image={props.image} handleImageGoBack={props.handleImageGoBack} />
		</div>
	);
};

export default ImageViewer;
