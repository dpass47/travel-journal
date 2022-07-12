import React from 'react';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './data';

const cardElements = data.map((item) => {
	return <Card key={item.id} {...item} />;
});

function App() {
	return (
		<div className="App">
			<Hero />
			<section className="card-list">{cardElements}</section>
		</div>
	);
}

export default App;
