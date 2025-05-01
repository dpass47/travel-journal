/* Copyright (c) 2024 Dante Passalacqua */

import React from 'react';

function Hero() {
	return (
		<div className="hero-container">
			<div className="hero">
				<img
					src={require('../Images/world-icon.png')}
					alt=""
					className="world-icon"
				/>
				<p className="hero--title">Travel Journal</p>
			</div>
		</div>
	);
}

export default Hero;
