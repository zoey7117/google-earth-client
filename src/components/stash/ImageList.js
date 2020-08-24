import React from 'react';
import ImageItem from './ImageItem';

const ImageList = (props) => {
	console.log(props);
	return (
		<div>
			<label htmlFor="search">Search by name </label>
			<input type="text" value={props.inputValue} onChange={props.imageFilter} />
			{/* <div className="image-list">
        {/* {
           props.images.map(image => {
           return <ImageItem image={image} key={image.id} handleImageView={props.handleImageView}/>
           }) */}
			{/* } */}
			{/* </div> */}
		</div>
	);
};

export default ImageList;
