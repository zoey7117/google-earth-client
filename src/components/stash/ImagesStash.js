import React from 'react';
import ImageSingle from './ImageSingle';
import { Card, Image } from 'semantic-ui-react';

const Images = (props) => {
	console.log(props);

	return allpets.map((pet) => {
		return (
			<Card key={pet.id} className="pet-card">
				<Image src={pet.image} alt="" className="pet-image" />{' '}
				{
					<Card.Content>
						{' '}
						<Card.Description>
							<h3>hi! i'm {pet.name}</h3>
							<h5>i'm {pet.age} years old.</h5>
							<hr />
						</Card.Description>
						{this.state.on_adopt ? (
							<div>
								{this.renderRedirect()}
								<button
									className="adopt"
									size="mini"
									onClick={() => {
										adoptPet(pet.id);
										{
											this.setRedirect();
										}
									}}
								>
									Adopt me!
								</button>
							</div>
						) : (
							<button className="adopt" onClick={this.adoptToggle} />
						)}
						<br />
					</Card.Content>
				}
			</Card>
		);
	});
}
}










	return (
		<div>
			<label htmlFor="search">
				<h3>search by name of country</h3>
			</label>
			<input type="text" value={props.inputValue} onChange={props.imageFilter} />
		</div>
	);
};





export default Images;
