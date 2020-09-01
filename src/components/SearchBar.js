// import React from 'react';
import React from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

// const Images = lazy(() => import('./Images'));
// import { Card, Image } from 'semantic-ui-react';

import Images from './Images';

const SearchBar = (props) => {
	return (
		<div>
			<div className="searchBar">
				<div className="search">
					<label htmlFor="search">
						<h4>Search by Name of Country</h4>
					</label>
					<br />
					<input type="text" value={props.inputValue} onChange={props.imageFilterOnChange} />
				</div>
			</div>
			<div className="container">
				{props.images.map((image) => {
					return <Images image={image} key={image.id} handleCardView={props.handleCardView} />;
				})}
			</div>
		</div>
	);
};
export default SearchBar;
// import React from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

// const MyImage = ({ image }) => (
//   <div>
//     <LazyLoadImage
//       alt={image.alt}
//       height={image.height}
//       src={image.src} // use normal <img> attributes as props
//       width={image.width} />
//     <span>{image.caption}</span>
//   </div>
// );

// export default MyImage;
