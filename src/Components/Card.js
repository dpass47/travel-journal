import React from 'react';

function Card(props) {
	return (
		<div className="card">
			<img
				src={require(`../Images/${props.coverImg}`)}
				alt=""
				className="card-image"
			/>
			<div className="card-content">
				<h2 className="card-location">
					<img
						src={require(`../Images/location-icon.png`)}
						alt=""
						className="card-location-icon"
					/>
					{props.location}{' '}
					<a href={props.maps} className="card-location-link">
						View on Google Maps
					</a>
				</h2>
				<h1 className="card-title">{props.title}</h1>
				<h3 className="card-dates">{props.dates}</h3>
				<p className="card-desc">{props.description}</p>
			</div>
		</div>
	);
}

export default Card;
