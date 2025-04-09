/* Copyright (c) 2024 Dante Passalacqua */

import React from 'react';
import { ReactComponent as SunIcon } from '../Images/sun-solid.svg';

function Hero() {
	return (
		<div className="hero-container">
			<div>
				<span></span>
			</div>
			<div className="hero">
				<img
					src={require('../Images/world-icon.png')}
					alt=""
					className="world-icon"
				/>
				<p className="hero--title">Travel Journal</p>
			</div>
			<div className="dark-mode-toggle">
				<SunIcon className="dark-mode-icon" />
			</div>
		</div>
	);
}

export default Hero;
