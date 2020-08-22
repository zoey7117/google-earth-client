import React from 'react';
import ImageSingle from './ImageSingle';
import { Card, Image } from 'semantic-ui-react';

class Images extends React.Component {
	// console.log(props);
	renderImages = (allimages) => {
		return allimages.map((image, idx) => <ImageSingle key={idx} image={image} />);
	};
	render() {
		console.log(this.props, this.props.images);
		const allimages = this.props.images;
		console.log(allimages);

		return <div>{this.renderImages}</div>;
	}
}

export default Images;

{
	/* <label htmlFor="search">
					<h3>search by name of country</h3>
				</label>
				<input type="text" value={props.inputValue} onChange={props.imageFilter} /> */
}
