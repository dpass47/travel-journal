/* Copyright (c) 2024 Dante Passalacqua */

import React from 'react';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './data';
import { useState } from 'react';
import { ReactComponent as SunIcon } from './Images/sun-solid.svg';
import { ReactComponent as MoonIcon } from './Images/moon-solid.svg';

function App() {
	const [darkMode, setDarkMode] = useState(true);

	darkMode
		? (document.body.style.backgroundColor = '#1e1e1e')
		: (document.body.style.backgroundColor = '#fff');

	function toggleDarkMode() {
		setDarkMode(!darkMode);
	}

	const cardElements = data.map((item) => {
		return (
			<Card
				key={item.id}
				{...item}
				darkMode={darkMode ? 'light' : 'dark'}
			/>
		);
	});

	return (
		<div className="App">
			<Hero />
			<section className="card-list">{cardElements}</section>
			<div
				className="dark-mode-toggle"
				onClick={toggleDarkMode}>
				{darkMode ? (
					<SunIcon className="dark-mode-icon light" />
				) : (
					<MoonIcon className="dark-mode-icon dark" />
				)}
			</div>
		</div>
	);
}

export default App;
