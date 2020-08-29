import React from 'react';
import ImageCard from './ImageCard';

const ImageViewer = (props) => {
	console.log('from imageviewer props', props);
	return (
		<div>
			<ImageCard image={props.image} />
		</div>
	);
};

export default ImageViewer;
