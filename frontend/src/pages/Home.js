import React from 'react';
import Champ from '../components/Champ';
import Name from '../components/Name';
import Navigation from '../components/Navigation';
import '../styles/style.css';

const Home = () => {

	return (
		<div className="home">
			<Navigation/>
			<h1>Ajouter Nav Ici</h1>
			<Name />
		</div>

	);
};

export default Home;