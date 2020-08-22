import React from 'react';
import ImageSingle from './ImageSingle';
import { Card, Image } from 'semantic-ui-react';

class Images extends React.Component {
	// console.log(props);
	render() {
		console.log(this.props, this.props.images);
		const allimages = this.props.images;

		return allimages.map((imagesingle) => {
			return (
				<div>
					{/* <label htmlFor="search">
					<h3>search by name of country</h3>
				</label>
				<input type="text" value={props.inputValue} onChange={props.imageFilter} /> */}
					<Card key={imagesingle.id} className="imagesingle-card">
						<Image src={imagesingle.image} alt="" className="imagesingle-image" />
						<Card.Content>
							<Card.Description>
								<h3>{imagesingle.name}</h3>
								<hr />
							</Card.Description>
						</Card.Content>
					</Card>
				</div>
			);
		});
	}
}

export default Images;
