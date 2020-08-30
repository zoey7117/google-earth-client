import React from 'react';
import ImageCard from './ImageCard';

const ImageViewer = (props) => {
	console.log('from imageviewer props', props);
	return (
		<div>
			{' '}
			<button onClick={props.handleGoHome} />
			<ImageCard image={props.image} handleGoHome={props.handleGoHome} />
		</div>
	);
};

export default ImageViewer;
