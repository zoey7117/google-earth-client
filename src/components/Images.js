import React from 'react';

import { Card, Image } from 'semantic-ui-react';

class Images extends React.Component {
	render() {
		// console.log(this.props);
		// const allimages = this.props.images;

		return (
			<Card key={this.props.id} className="photo" onClick={() => this.props.handleCardView(this.props.image)}>
				{/* <Image src={this.props.image} alt="" data-id={this.props.id} className="photo-image" height={265} /> */}
			</Card>
		);
	}
}
export default Images;
