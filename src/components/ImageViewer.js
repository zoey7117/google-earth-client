import React from 'react';
import ImageCard from './ImageCard';

const ImageViewer = (props) => {
	console.log('from imageviewer props', props);
	return (
		<div>
			<button onClick={props.handleImageHome}>Home</button>
			<ImageCard image={props.image} handleImageHome={props.handleImageHome} />
		</div>
	);
};

export default ImageViewer;
