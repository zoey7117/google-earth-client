import React from 'react';

import { Card, Image } from 'semantic-ui-react';

class Images extends React.Component {
	render() {
		console.log(this.props);
		const allimages = this.props.images;

		return allimages.map((photo) => {
			return (
				<Card key={photo.id} className="photo" onClick={() => this.props.handleCardView(this.props.image)}>
					<Image src={photo.image} alt="" data-id={photo.id} className="photo-image" height={265} />
				</Card>
			);
		});
	}
}

export default Images;
