import React from 'react';

function Hero() {
	return (
		<div className="hero">
			<img
				src={require('../Images/world-icon.png')}
				alt=""
				className="world-icon"
			/>
			<p className="hero--title">dante's travel journal.</p>
		</div>
	);
}

export default Hero;
