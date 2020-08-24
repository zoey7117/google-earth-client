import React from 'react';
import ImageSingle from './ImageSingle';
import { Card, Image, Grid } from 'semantic-ui-react';

class Images extends React.Component {
	// console.log(props);

	renderImages() {
		return this.props.images.map((image) => <ImageSingle key={image.id} image={image} />);
	}
	render() {
		// console.log(this.props, this.props.images);
		const allimages = this.props.images;

		return allimages.map((photo) => {
			return (
				// <div>
				// 	<div>{this.renderImages()}</div>
				<Card key={photo.id} className="photo-card">
					<Image src={photo.image} alt="" className="photo-image" height={265} />
					{
						<Card.Content>
							{/* <Card.Description>
								<h3>{photo.name}</h3>
							</Card.Description> */}
						</Card.Content>
					}
				</Card>
				// </div>
			);
		});
	}
}

export default Images;

{
	/* <label htmlFor="search">
					<h3>search by name of country</h3>
				</label>
				<input type="text" value={props.inputValue} onChange={props.imageFilter} /> */
}
